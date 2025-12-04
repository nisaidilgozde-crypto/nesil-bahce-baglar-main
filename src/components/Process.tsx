import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, UserPlus, TreePine, Droplets, Sprout, Camera } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { publicStudentsAPI, publicVolunteersAPI } from '@/lib/api';

const Process = () => {
  const [isStudentDialogOpen, setIsStudentDialogOpen] = useState(false);
  const [isVolunteerDialogOpen, setIsVolunteerDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [studentForm, setStudentForm] = useState({
    first_name: '',
    last_name: '',
    student_number: '',
    class_name: '',
    school_name: '',
    phone: '',
    email: '',
    notes: '',
  });

  const [volunteerForm, setVolunteerForm] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
  });

  const steps = [
    {
      step: 1,
      icon: GraduationCap,
      title: 'Öğrenci Kaydı',
      description:
        'Lise öğrencileri projeye kaydolur ve kendilerine bir gönüllü eşleştirilir',
      onClick: () => setIsStudentDialogOpen(true),
    },
    {
      step: 2,
      icon: UserPlus,
      title: 'Gönüllü Eşleştirme',
      description:
        'Her öğrenci bir gönüllü ile eşleştirilir ve birlikte çalışmaya başlarlar',
    },
    {
      step: 3,
      icon: TreePine,
      title: 'Gönüllü Katılımcı',
      description: 'Öğrenci ve gönüllü birlikte okul bahçesinde ağacı dikerler',
      onClick: () => setIsVolunteerDialogOpen(true),
    },
    {
      step: 4,
      icon: Droplets,
      title: 'Bakım ve Sulama',
      description:
        "Ağacın düzenli bakımı ve sulaması yapılır, her adımda gönüllüye bilgi SMS'i gönderilir",
    },
    {
      step: 5,
      icon: Sprout,
      title: 'Büyüme Takibi',
      description:
        'Ağacın büyüme süreci takip edilir ve gelişim güncellemeleri gönüllüye iletilir',
    },
    {
      step: 6,
      icon: Camera,
      title: 'Fotoğraf ve Dokümantasyon',
      description:
        'Ağacın gelişimini gösteren fotoğraflar çekilir ve gönüllüyle paylaşılır',
    },
  ];

  const handleStudentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentForm.first_name || !studentForm.last_name) {
      toast({
        title: 'Eksik bilgi',
        description: 'Lütfen öğrenci ad ve soyadını doldurun.',
        variant: 'destructive',
      });
      return;
    }

    try {
      setIsSubmitting(true);
      await publicStudentsAPI.create(studentForm);
      toast({
        title: 'Başvurunuz alındı',
        description:
          'Öğrenci kaydınız başarıyla oluşturuldu. En kısa sürede sizinle iletişime geçilecektir.',
      });
      setStudentForm({
        first_name: '',
        last_name: '',
        student_number: '',
        class_name: '',
        school_name: '',
        phone: '',
        email: '',
        notes: '',
      });
      setIsStudentDialogOpen(false);
    } catch (error: any) {
      toast({
        title: 'Kayıt oluşturulamadı',
        description: error.message || 'Lütfen daha sonra tekrar deneyin.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!volunteerForm.first_name || !volunteerForm.last_name || !volunteerForm.phone) {
      toast({
        title: 'Eksik bilgi',
        description: 'Lütfen ad, soyad ve telefon alanlarını doldurun.',
        variant: 'destructive',
      });
      return;
    }

    try {
      setIsSubmitting(true);
      await publicVolunteersAPI.create(volunteerForm);
      toast({
        title: 'Başvurunuz alındı',
        description:
          'Gönüllü kaydınız başarıyla oluşturuldu. En kısa sürede sizinle iletişime geçilecektir.',
      });
      setVolunteerForm({
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        address: '',
        notes: '',
      });
      setIsVolunteerDialogOpen(false);
    } catch (error: any) {
      toast({
        title: 'Kayıt oluşturulamadı',
        description: error.message || 'Lütfen daha sonra tekrar deneyin.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Proje Süreci
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Öğrenciler ve gönüllüler birlikte ağaç dikiyor, büyütüyor ve geleceği şekillendiriyor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            const isClickable = Boolean(step.onClick);
            return (
              <Card
                key={step.step}
                className={`border-2 border-border transition-all shadow-soft hover:shadow-strong ${
                  isClickable ? 'hover:border-primary cursor-pointer' : 'hover:border-primary/70'
                }`}
                onClick={step.onClick}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 inline-flex p-2 bg-gradient-primary rounded-lg">
                        <Icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                      {isClickable && (
                        <p className="mt-3 text-xs font-medium text-primary">
                          Tıklayarak {step.step === 1 ? 'öğrenci kaydı' : 'gönüllü başvurusu'} formunu
                          açabilirsiniz.
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mt-12 border-2 border-primary/20 bg-card shadow-strong">
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold mb-4">SMS Bildirim Sistemi</h3>
              <p className="text-lg leading-relaxed text-card-foreground">
                Proje boyunca gönüllüler otomatik olarak bilgilendirilir. Ağaç dikildiğinde,
                sulandığında, gübrelendiğinde ve büyüme güncellemeleri olduğunda gönüllülere
                anında SMS mesajı gönderilir. Bu sayede gönüllüler ağaçlarının gelişimini
                yakından takip edebilirler.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Öğrenci Kayıt Formu */}
      <Dialog open={isStudentDialogOpen} onOpenChange={setIsStudentDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Öğrenci Kaydı</DialogTitle>
            <DialogDescription>
              Projeye katılmak isteyen lise öğrencileri için başvuru formu. Bilgileriniz sadece proje
              kapsamında kullanılacaktır.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleStudentSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="student_first_name">Ad *</Label>
                <Input
                  id="student_first_name"
                  value={studentForm.first_name}
                  onChange={(e) =>
                    setStudentForm({ ...studentForm, first_name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="student_last_name">Soyad *</Label>
                <Input
                  id="student_last_name"
                  value={studentForm.last_name}
                  onChange={(e) =>
                    setStudentForm({ ...studentForm, last_name: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="student_school_name">Okul</Label>
                <Input
                  id="student_school_name"
                  value={studentForm.school_name}
                  onChange={(e) =>
                    setStudentForm({ ...studentForm, school_name: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="student_class_name">Sınıf</Label>
                <Input
                  id="student_class_name"
                  value={studentForm.class_name}
                  onChange={(e) =>
                    setStudentForm({ ...studentForm, class_name: e.target.value })
                  }
                  placeholder="9-A, 10-B vb."
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="student_phone">Telefon</Label>
                <Input
                  id="student_phone"
                  type="tel"
                  value={studentForm.phone}
                  onChange={(e) =>
                    setStudentForm({ ...studentForm, phone: e.target.value })
                  }
                  placeholder="05XX XXX XX XX"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="student_email">E-posta</Label>
                <Input
                  id="student_email"
                  type="email"
                  value={studentForm.email}
                  onChange={(e) =>
                    setStudentForm({ ...studentForm, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="student_notes">Notlar</Label>
              <Textarea
                id="student_notes"
                value={studentForm.notes}
                onChange={(e) =>
                  setStudentForm({ ...studentForm, notes: e.target.value })
                }
                rows={3}
                placeholder="Özel ihtiyaçlar, tercih ettiğiniz günler vb."
              />
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsStudentDialogOpen(false)}
              >
                İptal
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Gönderiliyor...' : 'Başvuruyu Gönder'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Gönüllü Kayıt Formu */}
      <Dialog open={isVolunteerDialogOpen} onOpenChange={setIsVolunteerDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Gönüllü Katılımcı Kaydı</DialogTitle>
            <DialogDescription>
              Projeye gönüllü olarak katılmak için formu doldurun. Sizinle en kısa sürede iletişime
              geçeceğiz.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleVolunteerSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="volunteer_first_name">Ad *</Label>
                <Input
                  id="volunteer_first_name"
                  value={volunteerForm.first_name}
                  onChange={(e) =>
                    setVolunteerForm({ ...volunteerForm, first_name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="volunteer_last_name">Soyad *</Label>
                <Input
                  id="volunteer_last_name"
                  value={volunteerForm.last_name}
                  onChange={(e) =>
                    setVolunteerForm({ ...volunteerForm, last_name: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="volunteer_phone">Telefon *</Label>
              <Input
                id="volunteer_phone"
                type="tel"
                value={volunteerForm.phone}
                onChange={(e) =>
                  setVolunteerForm({ ...volunteerForm, phone: e.target.value })
                }
                required
                placeholder="05XX XXX XX XX"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="volunteer_email">E-posta</Label>
              <Input
                id="volunteer_email"
                type="email"
                value={volunteerForm.email}
                onChange={(e) =>
                  setVolunteerForm({ ...volunteerForm, email: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="volunteer_address">Adres</Label>
              <Textarea
                id="volunteer_address"
                value={volunteerForm.address}
                onChange={(e) =>
                  setVolunteerForm({ ...volunteerForm, address: e.target.value })
                }
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="volunteer_notes">Notlar</Label>
              <Textarea
                id="volunteer_notes"
                value={volunteerForm.notes}
                onChange={(e) =>
                  setVolunteerForm({ ...volunteerForm, notes: e.target.value })
                }
                rows={3}
              />
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsVolunteerDialogOpen(false)}
              >
                İptal
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Gönderiliyor...' : 'Başvuruyu Gönder'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Process;




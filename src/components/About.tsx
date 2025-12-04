import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Heart, Users, Sprout, Brain } from "lucide-react";

const About = () => {
  const [isDiagramOpen, setIsDiagramOpen] = useState(false);
  const [isEcologyDialogOpen, setIsEcologyDialogOpen] = useState(false);
  const [isHorticultureDialogOpen, setIsHorticultureDialogOpen] = useState(false);

  const benefits = [
    {
      icon: Heart,
      title: "Projenin Amacı",
      description: "Projenin amacı"
    },
    {
      icon: Users,
      title: "Ekolojik Yaklaşım",
      description: "Ekolojik yaklaşım"
    },
    {
      icon: Sprout,
      title: "",
      description: ""
    },
    {
      icon: Brain,
      title: "Dijital Beceriler",
      description: "Yaşlı bireylerin dijital okuryazarlık seviyelerini artırma"
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Proje Hakkında
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hortikürel terapi etkinlikleri ile yaşlı bireylerin yaşam kalitesini artıran, 
            nesiller arası köprüler kuran yenilikçi bir sosyal sorumluluk projesi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isProjectPurpose = benefit.title === "Projenin Amacı";
            const isEcologyApproach = benefit.title === "Ekolojik Yaklaşım";
            const isHorticulture = benefit.title === "Hortikültürel Terapi";
            const isInteractive = isProjectPurpose || isEcologyApproach;
            return (
              <Card
                key={index}
                className={`border-2 border-border hover:border-primary transition-all shadow-soft hover:shadow-strong ${
                  isInteractive ? "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" : ""
                }`}
              >
                <CardContent
                  className={`pt-6 ${isInteractive ? "select-none" : ""}`}
                  onClick={
                    isProjectPurpose
                      ? () => setIsDiagramOpen(true)
                      : isEcologyApproach
                        ? () => setIsEcologyDialogOpen(true)
                        : isHorticulture
                          ? () => setIsHorticultureDialogOpen(true)
                          : undefined
                  }
                  role={isInteractive ? "button" : undefined}
                  tabIndex={isInteractive ? 0 : undefined}
                >
                  <div className="mb-4 inline-flex p-3 bg-gradient-primary rounded-lg">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                  {(isProjectPurpose || isEcologyApproach || isHorticulture) && (
                    <p className="text-xs text-primary mt-3 font-medium uppercase tracking-wide">
                      Şemayı görmek için tıklayın
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-2 border-primary/20 bg-card shadow-strong">
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-card-foreground">
                Projemiz, 8 haftalık kapsamlı bir hortikürel terapi programı ile yaşlı bireylerin 
                doğa ile bağ kurmalarını, psikolojik iyi oluşlarını artırmalarını ve çevreye karşı 
                duyarlılıklarını geliştirmelerini hedeflemektedir.
              </p>
              <p className="text-lg leading-relaxed text-card-foreground mt-4">
                Program süresince lise öğrencisi gönüllüler, dijital bir uygulama aracılığıyla 
                yaşlı katılımcılarla iletişim kurarak, onların dijital becerilerinin gelişmesine 
                de katkı sağlayacaktır. Bu benzersiz kuşaklararası etkileşim, hem yaşlı bireylere 
                hem de genç gönüllülere değerli deneyimler sunmaktadır.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={isDiagramOpen} onOpenChange={setIsDiagramOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>Projenin Amacı Şeması</DialogTitle>
            <DialogDescription>
              Hortikültürel terapi programının odak noktalarını ve kuşaklar arası etkileşim akışını gösteren özet.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <div className="text-base text-emerald-600 leading-relaxed text-center">
              Araştırmanın amacı, bahçe terapisi (Hortükültürel Terapi) uygulamalarının yaşlı bireylerin psikolojik iyi
              oluşlarını destekleme potansiyelini incelemek ve nesiller arası etkileşimi güçlendirerek gençlerin yaşlı
              bireylere yönelik tutumlarını olumlu yönde dönüştürmektir. Çalışma kapsamında, yaşlı bireylerin deneyim ve
              bilgi aktarımı yoluyla çevresel değerleri ve toplumsal sorumluluğu genç nesillere iletmesi hedeflenmektedir.
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isEcologyDialogOpen} onOpenChange={setIsEcologyDialogOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>Ekolojik Yaklaşım</DialogTitle>
            <DialogDescription>
              Projenin ekopsikoloji perspektifiyle doğa ile kurduğu bağın kısa özeti.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 text-base leading-relaxed text-emerald-600 text-center">
            İnsanlık için bir ‘öze dönüş’ yaklaşımı olan Ekopsikoloji düşüncesine göre, yaşadığımız dünyada bireyin her
            açıdan daha sağlıklı olması için ekolojik bilincini uyandırarak doğaya katkı sağlaması, hayvanlara ve doğaya
            saygı duyması ve bağlarını giderek kopardığı doğaya tekrar dönmesi önemlidir.
            <br />
            <br />
            Psikoloji ve ekoloji arasındaki ilişkiyi inceleyen ekopsikoloji kavramı, temelde insanın doğa ile olan
            ilişkisinin, insanın diğer insanlarla olan ilişkilerini etkilediğini savunan bir görüştür. Her insanın
            doğuştan gelen bir “ekolojik bilinç” ile dünyaya geldiğini ancak zamanla ve modernleşerek betonlaşan
            toplumda, kişilerin bu bilinçten giderek uzaklaşarak koptuğu düşünülüyor. Doğadan giderek uzaklaşan insanın
            bunun bir bedeli olarak mutsuzluk, yalnızlık ve sıkışmışlık hissi içinde dengesinin bozulduğunu ve yaşadığı
            dünyaya yabancılaştığı belirtiliyor (Hablemitoğlu, 2015).
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isHorticultureDialogOpen} onOpenChange={setIsHorticultureDialogOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="mt-6 text-base leading-relaxed text-emerald-600 text-center" />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default About;

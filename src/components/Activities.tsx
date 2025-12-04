import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { TreeDeciduous, Apple, Flower2, BookOpen, Sprout, FlaskConical, Leaf, Camera } from "lucide-react";

const Activities = () => {
  const [isSakliBahceDialogOpen, setIsSakliBahceDialogOpen] = useState(false);

  const activities = [
    {
      week: 1,
      icon: Flower2,
      title: "Tanışma Toplantısı",
      description: "Bahçecilik temel bilgileri, araç-gereç tanıtımı ve güvenli çalışma prensipleri"
    },
    {
      week: 2,
      icon: FlaskConical,
      title: "Saklı Bahçedeyiz",
      description: "Bahçe terapisi faaliyetleri, duyu deneyimleri ve rahatlama çalışmaları"
    },
    {
      week: 3,
      icon: Sprout,
      title: "Ağaç Dikimi",
      description: "Tohum ekimi teknikleri, fide yetiştirme ve bitki çoğaltma yöntemleri"
    },
    {
      week: 4,
      icon: TreeDeciduous,
      title: "Kuş Cenneti Gezisi",
      description: "Botanik bahçe keşfi, zengin bitki koleksiyonları ve kuş cenneti gözlemleriyle doğa deneyimi"
    },
    {
      week: 5,
      icon: Apple,
      title: "Orman Banyosu ve Ağaç Terapisi",
      description: "Bahçeden hasat yapma, organik ürünlerin faydaları ve sağlıklı beslenme"
    },
    {
      week: 6,
      icon: BookOpen,
      title: "Herbaryum Hazırlama",
      description: "Bitki örnekleri toplama, kurutma ve herbaryum oluşturma teknikleri"
    },
    {
      week: 7,
      icon: Leaf,
      title: "Meyve Toplama",
      description: "Meyve ve sebze toplama"
    },
    {
      week: 8,
      icon: Camera,
      title: "Ata Tohumları Devir Teslim Töreni",
      description: "Deneyimlerin paylaşılması, fotoğraf sergisi ve sertifika töreni"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Faaliyetler
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Detaylı planlanmış hortikürel terapi etkinlikleri ile dolu, zenginleştirilmiş bir öğrenme yolculuğu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity) => {
            const Icon = activity.icon;
            const isSakliBahce = activity.title === "Saklı Bahçedeyiz";
            return (
              <Card
                key={activity.week}
                className={`group hover:border-primary transition-all shadow-soft hover:shadow-strong ${
                  isSakliBahce ? "cursor-pointer" : ""
                }`}
                onClick={isSakliBahce ? () => setIsSakliBahceDialogOpen(true) : undefined}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
                      Hafta {activity.week}
                    </Badge>
                    <div className="p-2 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{activity.description}</p>
                  {isSakliBahce && (
                    <p className="mt-2 text-xs font-medium text-primary">
                      Detaylı etkinlik planını görmek için tıklayın.
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Saklı Bahçedeyiz Detay Dialogu */}
      <Dialog open={isSakliBahceDialogOpen} onOpenChange={setIsSakliBahceDialogOpen}>
        <DialogContent className="sm:max-w-4xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Saklı Bahçedeyiz (Süs Bitkileri) ve Kokulu–Dokulu Bitkiler Atölyesi</DialogTitle>
            <DialogDescription>
              Saklı Bahçe’de gerçekleştirilen doğa temelli etkinliklerin ayrıntılı planı.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 space-y-8 text-sm md:text-base leading-relaxed text-foreground">
            {/* Etkinlik 1: Saklı Bahçedeyiz (Süs Bitkileri) */}
            <section className="space-y-2">
              <h3 className="text-lg font-semibold">1. Etkinlik: Saklı Bahçedeyiz (Süs Bitkileri)</h3>
              <p>
                <span className="font-semibold">Etkinliğin Adı: </span>
                Saklı Bahçedeyiz (Süs Bitkileri)
              </p>
              <p>
                <span className="font-semibold">Amaç: </span>
                Yaşlı bireyler ile lise öğrencilerini doğa temelli bir etkinlik etrafında bir araya getirerek kuşaklar
                arası etkileşimi güçlendirmek, ekopsikolojik yaklaşımla doğayla bağ kurmalarını desteklemek ve çevreye
                yönelik duyarlılıklarını artırmak.
              </p>
              <p>
                <span className="font-semibold">Hedef Grup: </span>
                Deney Grubu lise öğrencileri ve yaşlı bireyler (ikili veya küçük grup eşleştirmesi yapılacaktır).
              </p>
              <p>
                <span className="font-semibold">Öğrenme Çıktıları: </span>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Bitki bakımıyla ilgili temel bilgi ve beceri kazanımı.</li>
                <li>Çevre ve doğa duyarlılığının artması.</li>
                <li>Kuşaklar arası iletişim ve iş birliği becerisinin gelişmesi.</li>
                <li>Yaşlılarda psikolojik iyi oluşa katkı sağlaması.</li>
                <li>Öğrencilerde yaşlı bireylere yönelik olumlu tutumların artması.</li>
              </ul>
              <p>
                <span className="font-semibold">Süre: </span>
                60–75 dakika
              </p>
              <p>
                <span className="font-semibold">Etkinlik Alanı: </span>
                Saklı Bahçe
              </p>
              <p>
                <span className="font-semibold">Gerekli Materyaller: </span>
                Süs bitkisi fideleri/tohumları, saksılar, toprak/torf, el kürekleri, eldiven, sprey şişesi, etiket
                kartları, kalem, masa örtüsü, bitki bakım çizelgesi.
              </p>

              <p className="font-semibold mt-3">Etkinlik Akışı:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <span className="font-semibold">A. Tanışma ve Isınma (10 dakika)</span>
                  <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                    <li>Katılımcılar kısa bir tanışma turu yapar.</li>
                    <li>“Doğayla ilişkim…” temalı kısa bir paylaşım yapılır.</li>
                    <li>Lise öğrencileri ile yaşlı bireyler ikili veya küçük gruplar hâlinde eşleştirilir.</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">B. Ekopsikolojik Yaklaşıma Giriş (5 dakika)</span>
                  <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                    <li>Doğada bulunmanın duygusal ve zihinsel etkileri hakkında kısa bir bilgilendirme yapılır.</li>
                    <li>Bitki yetiştirmenin insan psikolojisine katkıları anlatılır.</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">C. Süs Bitkisi Ekimi Uygulaması (25–30 dakika)</span>
                  <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                    <li>Eşleşen gruplar saksılarına toprak doldurur.</li>
                    <li>Yaşlı bireyler bitki yetiştirme deneyimlerini öğrencilerle paylaşır.</li>
                    <li>
                      Öğrenciler saksı etiketi hazırlama, bitkinin düzgün yerleştirilmesi ve sulama kontrolü gibi
                      adımlarda destek olur.
                    </li>
                    <li>Her grup kendi bitkisini eker.</li>
                    <li>Bitki bakım çizelgesi birlikte hazırlanır (sulama günleri, güneş ihtiyacı vb.).</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">D. Duyuşsal Farkındalık Çalışması (10 dakika)</span>
                  <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                    <li>
                      Her katılımcı “Bu bitki bana ne hissettiriyor?” veya “Bu bitkiyi neden seçtim?” sorularını
                      yanıtlayan kısa bir not yazar.
                    </li>
                    <li>Grupta gönüllü olanlar notlarını paylaşır.</li>
                    <li>Kuşaklar arası bağın bitki aracılığıyla nasıl güçlendiği üzerine konuşulur.</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">E. Kapanış ve Değerlendirme (5 dakika)</span>
                  <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                    <li>Katılımcılar etkinlikten edindikleri duyguları ve deneyimleri paylaşır.</li>
                    <li>Bitkinin bakımının kim tarafından nasıl sürdürüleceği planlanır.</li>
                    <li>Kısa bir sözlü geri bildirim alınır.</li>
                  </ul>
                </li>
              </ol>

              <p className="mt-2">
                <span className="font-semibold">Değerlendirme: </span>
                1–2 gün sonra dijital uygulama aracılığıyla bitki durum değerlendirmesi.
              </p>
            </section>

            {/* Etkinlik 2: Kokulu–Dokulu Bitkiler Atölyesi */}
            <section className="space-y-2">
              <h3 className="text-lg font-semibold">
                2. Etkinlik: Kokulu–Dokulu Bitkiler: Saklı Bahçe Atölye Çalışması
              </h3>
              <p>
                <span className="font-semibold">Etkinliğin Adı: </span>
                Kokulu–Dokulu Bitkiler: Saklı Bahçe Atölye Çalışması
              </p>
              <p>
                <span className="font-semibold">Amaç: </span>
                Katılımcıların duyusal farkındalıklarını artırmak, dokunsal ve kokusal bitkiler aracılığıyla doğa ile bağ
                kurmalarını sağlamak, kuşaklar arası etkileşimi güçlendirmek ve ekopsikolojik yaklaşımla psikolojik iyi
                oluşu desteklemek.
              </p>
              <p>
                <span className="font-semibold">Hedef Grup: </span>
                Lise öğrencileri ve yaşlı bireylerden oluşan deney grubu.
              </p>
              <p>
                <span className="font-semibold">Öğrenme Çıktıları: </span>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Koku ve doku duyularını ayırt etme becerisi.</li>
                <li>Kokulu ve dokulu bitkileri tanıma.</li>
                <li>Kuşaklar arası iletişim ve paylaşımın güçlenmesi.</li>
                <li>Doğa temelli etkinliklerle duygusal rahatlama sağlama.</li>
                <li>Bitki bakımı ve duyusal bahçe kavramlarına ilişkin temel bilgi edinme.</li>
                <li>Birlikte üretme ve tasarlama deneyimi kazanma.</li>
              </ul>
              <p>
                <span className="font-semibold">Süre: </span>
                60–75 dakika
              </p>
              <p>
                <span className="font-semibold">Etkinlik Alanı: </span>
                Saklı Bahçe
              </p>
              <p>
                <span className="font-semibold">Gerekli Materyaller: </span>
                Lavanta, nane, biberiye, adaçayı gibi kokulu bitkiler; keçeli yapraklar, kaktüs, sukulent gibi dokulu
                bitkiler; küçük saksılar; torf/toprak; etiket kartları; eldiven; el küreği; masa örtüsü; su şişesi /
                spreyi.
              </p>

              <p className="font-semibold mt-3">Etkinlik Akışı:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <span className="font-semibold">1. Karşılama ve Isınma (10 dk)</span>:
                  Duyular üzerine kısa sohbet; “Bana huzur veren bir koku/dokunma deneyimi” paylaşımı.
                </li>
                <li>
                  <span className="font-semibold">2. Bitkilerin Tanıtımı (5 dk)</span>:
                  Kokulu ve dokulu bitkilerin özellikleri, kullanım alanları ve ekopsikolojik etkilerinin açıklanması.
                </li>
                <li>
                  <span className="font-semibold">3. Saklı Bahçe Uygulaması (25–30 dk)</span>:
                  Katılımcıların küçük saksılara seçtikleri kokulu–dokulu bitkilerle kendi mini “saklı bahçelerini”
                  oluşturması; yaşlı bireylerin bitki bakımıyla ilgili deneyimlerini anlatması; öğrencilerin etiket ve
                  düzenleme desteği vermesi.
                </li>
                <li>
                  <span className="font-semibold">4. Duyusal Farkındalık (10 dk)</span>:
                  Katılımcıların bitkilerin kokularını ve dokularını inceleyerek hissettiklerini not etmeleri ve
                  paylaşmaları.
                </li>
                <li>
                  <span className="font-semibold">5. Kapanış (5 dk)</span>:
                  Bahçelerin fotoğrafının çekilmesi, bakım sorumluluklarının belirlenmesi ve kısa bir değerlendirme.
                </li>
              </ol>

              <p className="mt-2">
                <span className="font-semibold">Değerlendirme: </span>
                1 hafta sonra bitki durumu ve bakım takibinin dijital uygulama aracılığıyla gerçekleştirilmesi.
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Activities;

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, BarChart3, Globe, Mail, MessageSquare, Phone, Search, TrendingUp, Users } from "lucide-react"

export default function DigitalMarketingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-white">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Globe className="h-6 w-6 text-primary" />
            <span>ديجيتال برو</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              الرئيسية
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              خدماتنا
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              من نحن
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              آراء العملاء
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              اتصل بنا
            </Link>
          </nav>
          <Button className="hidden md:flex">احصل على استشارة مجانية</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    ارتقِ بعملك مع حلول التسويق الرقمي المتكاملة
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    نساعدك على تحقيق النمو من خلال استراتيجيات تسويقية مبتكرة مصممة خصيصًا لتلبية احتياجات عملك
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    ابدأ الآن
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    تواصل معنا
                  </Button>
                </div>
              </div>
              <img
                src="/placeholder.svg?height=550&width=550"
                width="550"
                height="550"
                alt="صورة التسويق الرقمي"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  خدماتنا
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">حلول تسويقية متكاملة</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  نقدم مجموعة شاملة من خدمات التسويق الرقمي المصممة لتعزيز تواجدك عبر الإنترنت وزيادة المبيعات
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card className="transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <Search className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>تحسين محركات البحث</CardTitle>
                  <CardDescription>تحسين ترتيب موقعك في نتائج البحث وزيادة الزيارات العضوية</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-500">
                    <li>تحليل الكلمات المفتاحية</li>
                    <li>تحسين المحتوى</li>
                    <li>بناء الروابط الخلفية</li>
                    <li>تحسين السرعة والأداء</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <TrendingUp className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>إعلانات مدفوعة</CardTitle>
                  <CardDescription>حملات إعلانية مستهدفة لزيادة الوصول وتحقيق عائد استثمار أعلى</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-500">
                    <li>إعلانات جوجل</li>
                    <li>إعلانات منصات التواصل الاجتماعي</li>
                    <li>إعلانات إعادة الاستهداف</li>
                    <li>تحليل وتحسين الحملات</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>إدارة وسائل التواصل</CardTitle>
                  <CardDescription>بناء وتنمية حضورك على منصات التواصل الاجتماعي</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-500">
                    <li>إنشاء وجدولة المحتوى</li>
                    <li>إدارة المجتمع والتفاعل</li>
                    <li>حملات تسويقية مخصصة</li>
                    <li>تحليل الأداء والنتائج</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <Mail className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>التسويق عبر البريد الإلكتروني</CardTitle>
                  <CardDescription>حملات بريدية مخصصة لتعزيز المبيعات وولاء العملاء</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-500">
                    <li>تصميم قوالب احترافية</li>
                    <li>تقسيم الجمهور المستهدف</li>
                    <li>أتمتة الحملات البريدية</li>
                    <li>تحليل معدلات الفتح والنقر</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <MessageSquare className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>إنشاء المحتوى</CardTitle>
                  <CardDescription>محتوى جذاب وقيم يستهدف جمهورك ويعزز تحويلاتك</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-500">
                    <li>مقالات ومدونات</li>
                    <li>محتوى فيديو وصور</li>
                    <li>محتوى منصات التواصل</li>
                    <li>تحسين المحتوى لمحركات البحث</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <BarChart3 className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>تحليل البيانات</CardTitle>
                  <CardDescription>تحليل شامل لأداء حملاتك واتخاذ قرارات مبنية على البيانات</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-500">
                    <li>تقارير أداء مفصلة</li>
                    <li>تحليل سلوك المستخدم</li>
                    <li>قياس معدلات التحويل</li>
                    <li>توصيات لتحسين الأداء</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <img
                src="/placeholder.svg?height=400&width=600"
                width="600"
                height="400"
                alt="فريق التسويق"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    من نحن
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">فريق من الخبراء المتخصصين</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    نحن وكالة تسويق رقمي متكاملة تضم نخبة من المتخصصين ذوي الخبرة في مختلف مجالات التسويق الرقمي. نعمل
                    بشغف لمساعدة الشركات على تحقيق أهدافها التسويقية.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">لماذا تختارنا؟</h3>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>استراتيجيات مخصصة لكل عميل</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>فريق من الخبراء المتخصصين</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>نتائج ملموسة وقابلة للقياس</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>دعم مستمر وتقارير دورية</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <Button size="lg">تعرف على المزيد</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  آراء العملاء
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">ماذا يقول عملاؤنا عنا</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  نفخر بالنتائج التي نحققها لعملائنا وبثقتهم المستمرة في خدماتنا
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img
                      src="/placeholder.svg?height=60&width=60"
                      width="60"
                      height="60"
                      alt="صورة العميل"
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-lg">أحمد محمد</CardTitle>
                      <CardDescription>مدير تسويق، شركة تقنية</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    "ساعدتنا ديجيتال برو على زيادة حركة المرور العضوية إلى موقعنا بنسبة 150% خلال 6 أشهر فقط. فريق محترف
                    ونتائج ممتازة!"
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img
                      src="/placeholder.svg?height=60&width=60"
                      width="60"
                      height="60"
                      alt="صورة العميل"
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-lg">سارة أحمد</CardTitle>
                      <CardDescription>مالكة متجر إلكتروني</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    "بفضل حملات التسويق عبر وسائل التواصل الاجتماعي التي نفذتها ديجيتال برو، تمكنا من زيادة مبيعاتنا
                    بنسبة 200% خلال موسم التخفيضات."
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img
                      src="/placeholder.svg?height=60&width=60"
                      width="60"
                      height="60"
                      alt="صورة العميل"
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-lg">محمد علي</CardTitle>
                      <CardDescription>مدير عام، شركة عقارية</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    "استراتيجية التسويق الرقمي التي وضعتها ديجيتال برو ساعدتنا على الوصول إلى عملاء جدد وزيادة عدد
                    العقارات المباعة بشكل ملحوظ."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  اتصل بنا
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">دعنا نساعدك في تنمية عملك</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  تواصل معنا اليوم للحصول على استشارة مجانية واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك التسويقية
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>أرسل لنا رسالة</CardTitle>
                  <CardDescription>املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          الاسم الأول
                        </label>
                        <Input id="first-name" placeholder="أدخل اسمك الأول" />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          الاسم الأخير
                        </label>
                        <Input id="last-name" placeholder="أدخل اسمك الأخير" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        البريد الإلكتروني
                      </label>
                      <Input id="email" placeholder="أدخل بريدك الإلكتروني" type="email" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        رقم الهاتف
                      </label>
                      <Input id="phone" placeholder="أدخل رقم هاتفك" type="tel" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        الرسالة
                      </label>
                      <Textarea id="message" placeholder="اكتب رسالتك هنا" className="min-h-[120px]" />
                    </div>
                    <Button type="submit" className="w-full">
                      إرسال الرسالة
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="flex flex-col gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>معلومات الاتصال</CardTitle>
                    <CardDescription>يمكنك التواصل معنا مباشرة من خلال</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Mail className="h-5 w-5 mt-0.5 text-primary" />
                      <div>
                        <h3 className="font-medium">البريد الإلكتروني</h3>
                        <p className="text-sm text-gray-500">info@digitalpro.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="h-5 w-5 mt-0.5 text-primary" />
                      <div>
                        <h3 className="font-medium">الهاتف</h3>
                        <p className="text-sm text-gray-500">+966 12 345 6789</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 mt-0.5 text-primary"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <div>
                        <h3 className="font-medium">العنوان</h3>
                        <p className="text-sm text-gray-500">شارع الملك فهد، الرياض، المملكة العربية السعودية</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>ساعات العمل</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">الأحد - الخميس:</span>
                      <span className="text-sm">9:00 ص - 6:00 م</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">الجمعة:</span>
                      <span className="text-sm">مغلق</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">السبت:</span>
                      <span className="text-sm">10:00 ص - 2:00 م</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  جاهز لتنمية عملك مع استراتيجيات تسويقية فعالة؟
                </h2>
                <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl/relaxed">
                  احصل على استشارة مجانية اليوم واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="gap-1">
                  احصل على استشارة مجانية
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-white py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <Globe className="h-6 w-6 text-primary" />
                <span>ديجيتال برو</span>
              </div>
              <p className="text-sm text-gray-500">
                وكالة تسويق رقمي متكاملة تقدم حلولًا مبتكرة لتنمية الأعمال عبر الإنترنت
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-500 hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">روابط سريعة</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link href="#" className="hover:text-primary">
                  الرئيسية
                </Link>
                <Link href="#services" className="hover:text-primary">
                  خدماتنا
                </Link>
                <Link href="#about" className="hover:text-primary">
                  من نحن
                </Link>
                <Link href="#testimonials" className="hover:text-primary">
                  آراء العملاء
                </Link>
                <Link href="#contact" className="hover:text-primary">
                  اتصل بنا
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">خدماتنا</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link href="#" className="hover:text-primary">
                  تحسين محركات البحث
                </Link>
                <Link href="#" className="hover:text-primary">
                  إعلانات مدفوعة
                </Link>
                <Link href="#" className="hover:text-primary">
                  إدارة وسائل التواصل
                </Link>
                <Link href="#" className="hover:text-primary">
                  التسويق عبر البريد الإلكتروني
                </Link>
                <Link href="#" className="hover:text-primary">
                  إنشاء المحتوى
                </Link>
                <Link href="#" className="hover:text-primary">
                  تحليل البيانات
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">النشرة الإخبارية</h3>
              <p className="text-sm text-gray-500">
                اشترك في نشرتنا الإخبارية للحصول على أحدث النصائح والأخبار في مجال التسويق الرقمي
              </p>
              <form className="flex flex-col gap-2">
                <Input placeholder="أدخل بريدك الإلكتروني" type="email" />
                <Button type="submit">اشترك الآن</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 text-center text-sm text-gray-500">
            <p>© 2025 ديجيتال برو. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

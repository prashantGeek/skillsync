import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CoursesSection from '@/components/sections/CoursesSection';

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <CoursesSection />
      </main>
      <Footer />
    </div>
  );
}

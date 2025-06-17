import Footer from "../organisams/footer";
import Header from "../organisams/header";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <Header />
      {children}
      <Footer />
    </div>
  );
}

import HomePage from "@/components/pages/home/home";
import MainLayout from "@/components/templates/layout";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
}

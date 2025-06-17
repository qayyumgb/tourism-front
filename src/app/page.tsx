import MainLayout from "@/components/templates/layout";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <MainLayout>
      {/* {children} */}
      <h1>Main Page</h1>
    </MainLayout>
  );
}

import Layout from "../client/components/Layout/Layout";
import IndexCard from "../client/components/IndexCard/IndexCard";

const IndexPage = () => {
  return (
    <Layout>
      <div className="background">
        <img src="/images/project.jpg" alt="index" className="index" />
      </div>

      <IndexCard />

      <style jsx>{`
        .background {
          position: absolute;
          z-index: -1;
          height: 105%;
          width: 100%;
        }

        .index {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </Layout>
  );
};

export default IndexPage;

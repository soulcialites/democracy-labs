// @ts-nocheck
import { DAOStream } from "@democracy-labs/governor-alpha-wagmi";

import { IsMounted } from "@/components/IsMounated";
import { Main } from "@/templates/Main";
import { Meta } from "@/templates/Meta";
import { AppConfig } from "@/utils/AppConfig";

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title={`${AppConfig.title} | ${AppConfig.description}`}
          description={AppConfig.description}
        />
      }
    >
      <section className="py-10">
        <div className="container mx-auto max-w-screen-md">
          <div className="card">
            <h3 className="text-4xl font-normal">Latest Citizens</h3>
            <hr className="my-3 opacity-5" />
            <IsMounted>
              <DAOStream />
            </IsMounted>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Index;

import Layout from "../../components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <div>
        <img
          className="object-cover w-full h-80"
          src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_2560,c_limit/7feca583-7d46-48af-89da-613c2c9e1193/nike-just-do-it.jpg"
          alt=""
        />
        <div className="mt-20">
          <h2 className="text-3xl mb-10">Nike Membership</h2>
          <div className="flex gap-4">
            <div className="flex-1">
              <img
                className="w-full"
                src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_599,c_limit/4c87032a-1756-47dc-b731-966f2d79285e/nike-just-do-it.jpg"
                alt=""
              />
            </div>
            <div className="flex-1">
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_599,c_limit/058f025c-2161-4804-91c8-5176ea565294/nike-just-do-it.jpg"
                alt=""
              />
            </div>
            <div className="flex-1">
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_599,c_limit/c9176bd9-e727-46ad-8bcb-62312cbfd5d5/nike-just-do-it.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TrafficConditionList } from "./trafficCondition/TrafficConditionList";
import { TrafficConditionCreate } from "./trafficCondition/TrafficConditionCreate";
import { TrafficConditionEdit } from "./trafficCondition/TrafficConditionEdit";
import { TrafficConditionShow } from "./trafficCondition/TrafficConditionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Traffic Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TrafficCondition"
          list={TrafficConditionList}
          edit={TrafficConditionEdit}
          create={TrafficConditionCreate}
          show={TrafficConditionShow}
        />
      </Admin>
    </div>
  );
};

export default App;

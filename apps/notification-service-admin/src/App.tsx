import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { NotificationTypeList } from "./notificationType/NotificationTypeList";
import { NotificationTypeCreate } from "./notificationType/NotificationTypeCreate";
import { NotificationTypeEdit } from "./notificationType/NotificationTypeEdit";
import { NotificationTypeShow } from "./notificationType/NotificationTypeShow";
import { UserNotificationList } from "./userNotification/UserNotificationList";
import { UserNotificationCreate } from "./userNotification/UserNotificationCreate";
import { UserNotificationEdit } from "./userNotification/UserNotificationEdit";
import { UserNotificationShow } from "./userNotification/UserNotificationShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
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
        title={"Notification Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="NotificationType"
          list={NotificationTypeList}
          edit={NotificationTypeEdit}
          create={NotificationTypeCreate}
          show={NotificationTypeShow}
        />
        <Resource
          name="UserNotification"
          list={UserNotificationList}
          edit={UserNotificationEdit}
          create={UserNotificationCreate}
          show={UserNotificationShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
      </Admin>
    </div>
  );
};

export default App;

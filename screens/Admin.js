import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import Customer from "./Customer"
import Customers from "./Customers"
import RouterService, {} from '../routers/RouterService'
import Transaction from "./Transaction"
import Setting, {} from './Setting'

const Tab = createMaterialBottomTabNavigator()

const Admin = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="RouterService" component={RouterService} options={{
        title: "Home",
        tabBarIcon: "home"
      }} />
      <Tab.Screen name="Transaction" component={Transaction} options={{
        tabBarIcon: "cash"
      }} />
      <Tab.Screen name="Customers" component={Customers} options={{
        tabBarIcon: "account"
      }} />
      <Tab.Screen name="Setting" component={Setting} options={{
        tabBarIcon: "cog"
      }} />
    </Tab.Navigator>
  )
}

export default Admin
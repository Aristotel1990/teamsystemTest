import { useState, useEffect } from "react";
import AddCustomers from "../components/AddCustomers";
import Page from "../utils/Page";

// material
import { Tab, Box, Tabs, Stack } from "@mui/material";
import CustomersTable from "../components/CustomersTable";

// redux

// ----------------------------------------------------------------------

export default function CustomerTab() {
  const [currentTab, setCurrentTab] = useState("Customers");
  useEffect(() => {}, []);
  const ACCOUNT_TABS = [
    {
      value: "Customers",
      component: (
        <Page title="User">
          <Box sx={{ height: 800 }}>
            <CustomersTable />
          </Box>
        </Page>
      ),
    },

    {
      value: "Add Customer",
      component: (
        <Page title="User">
          <Box sx={{ height: 800 }}>
            <AddCustomers />
          </Box>
        </Page>
      ),
    },
  ];
  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };
  return (
    <Page title="User: Account Settings | Bip Courier">
      <Stack spacing={2}>
        <Tabs
          value={currentTab}
          scrollButtons="auto"
          variant="scrollable"
          allowScrollButtonsMobile
          onChange={handleChangeTab}
        >
          {ACCOUNT_TABS.map((tab) => (
            <Tab
              disableRipple
              key={tab.value}
              label={tab.value}
              icon={tab.icon}
              value={tab.value}
            />
          ))}{" "}
        </Tabs>

        {ACCOUNT_TABS.map((tab) => {
          const isMatched = tab.value === currentTab;
          return isMatched && <Box key={tab.value}>{tab.component}</Box>;
        })}
      </Stack>
    </Page>
  );
}

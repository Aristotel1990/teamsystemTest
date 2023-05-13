import { useState, useEffect } from "react";

// material
import { Tab, Box, Tabs, Stack, Grid } from "@mui/material";

// redux
import Notes from "./Notes";
import Demo from "./Demo";
import CustomersList from "./CustomersList";
import Page from "../utils/Page";
import InvoiceTable from "./InvoiceTable";

// ----------------------------------------------------------------------

export default function HomeScreen() {
  const [currentTab, setCurrentTab] = useState("Customers");
  useEffect(() => {}, []);
  const ACCOUNT_TABS = [
    {
      value: "Customers",
      component: (
        <Page title="User">
          <Box sx={{ height: 800 }}>
            <CustomersList />
          </Box>
        </Page>
      ),
    },

    {
      value: "Products",
      component: (
        <Page title="User">
          <Box sx={{ height: 800 }}>
            <Notes />
          </Box>
        </Page>
      ),
    },
    {
      value: "Invoice",
      component: (
        <Page title="User">
          <Box sx={{ height: 800 }}>
            <InvoiceTable />
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

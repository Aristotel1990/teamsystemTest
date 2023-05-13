import { useState, useEffect } from "react";
import CustomersList from "../components/CustomersList";
import AddCustomers from "../components/AddCustomers";
import Page from "../utils/Page";
import InvoiceTable from "../components/InvoiceTable";
import CreateInvoice from "../components/CreateInvoice";

// material
import { Tab, Box, Tabs, Stack, Grid } from "@mui/material";

// redux

// ----------------------------------------------------------------------

export default function InvoiceTab() {
  const [currentTab, setCurrentTab] = useState("Invoices");
  useEffect(() => {}, []);
  const ACCOUNT_TABS = [
    {
      value: "Invoices",
      component: (
        <Page title="User">
          <Box sx={{ height: 800 }}>
            <InvoiceTable />
          </Box>
        </Page>
      ),
    },

    {
      value: "Add Invoice",
      component: (
        <Page title="User">
          <Box sx={{ height: 800 }}>
            <CreateInvoice />
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

import { useState, useEffect } from "react";
import CustomersList from "../components/CustomersList";
import AddCustomers from "../components/AddCustomers";
import Page from "../utils/Page";
import InvoiceTable from "../components/InvoiceTable";
import CreateInvoice from "../components/CreateInvoice";
import { useDispatch } from "../redux/store";

// material
import { Tab, Box, Tabs, Stack, Grid } from "@mui/material";
import {
  getData,
  getInvoicesFromStorage,
  getItemsFromStorage,
  getdataFromStorage,
} from "../redux/slices/data";

// redux

// ----------------------------------------------------------------------

export default function InvoiceTab() {
  const dispatch = useDispatch();

  const [currentTab, setCurrentTab] = useState("Invoices");
  useEffect(() => {
    dispatch(getdataFromStorage());
    dispatch(getItemsFromStorage());
    dispatch(getInvoicesFromStorage());
    dispatch(getData());
  }, [dispatch]);
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

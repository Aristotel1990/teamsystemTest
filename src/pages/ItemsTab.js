import { useState, useEffect } from "react";
import Page from "../utils/Page";
import ItemsTable from "../components/ItemsTable";
import AddItems from "../components/AddItems";

// material
import { Tab, Box, Tabs, Stack, Grid } from "@mui/material";

// redux

// ----------------------------------------------------------------------

export default function ItemsTab() {
  const [currentTab, setCurrentTab] = useState("Items");
  useEffect(() => {}, []);
  const ACCOUNT_TABS = [
    {
      value: "Items",
      component: (
        <Page title="User">
          <Box sx={{ height: 800 }}>
            <ItemsTable />
          </Box>
        </Page>
      ),
    },

    {
      value: "Add Items",
      component: (
        <Page title="User">
          <Box sx={{ height: 800 }}>
            <AddItems />
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

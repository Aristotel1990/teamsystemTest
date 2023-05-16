import { useState, useEffect } from "react";
import Page from "../utils/Page";

// material
import { Tab, Box, Tabs, Stack } from "@mui/material";
import { ItemsTable } from "../components/tables";
import { AddItems } from "../components/home";

// redux

// ----------------------------------------------------------------------

export default function ItemsTab() {
  const [currentTab, setCurrentTab] = useState("Items");
  useEffect(() => {}, []);
  const ACCOUNT_TABS = [
    {
      value: "Items",
      component: (
        <Page title="Items">
          <Box sx={{ height: 800 }}>
            <ItemsTable />
          </Box>
        </Page>
      ),
    },

    {
      value: "Add Items",
      component: (
        <Page title="Add Items">
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
    <Page title="Teamflex">
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

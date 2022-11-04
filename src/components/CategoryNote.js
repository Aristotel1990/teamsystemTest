import { useState, useEffect } from "react";

// material
import { Tab, Box, Tabs, Stack } from "@mui/material";
import { useDispatch, useSelector } from "../redux/store";
import ListNotes from "./ListNotes";
import { getCategory } from "../redux/slices/notes";

// ----------------------------------------------------------------------

export default function CategoryNote() {
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState("Very important");
  const { category } = useSelector((state) => state.notes);
  const [data, setData] = useState(category);

  useEffect(() => {
    setData(category);
  }, [category]);

  const ACCOUNT_TABS = [
    {
      value: "Important",
      component: <ListNotes notes={data} />,
    },
    {
      value: "Very important",
      component: <ListNotes notes={data} />,
    },
    {
      value: "Not important",
      component: <ListNotes notes={data} />,
    },
  ];

  const handleChangeTab = async (event, newValue) => {
    setCurrentTab(newValue);
    dispatch(getCategory(newValue));
  };
  return (
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
        ))}
      </Tabs>

      {ACCOUNT_TABS.map((tab) => {
        const isMatched = tab.value === currentTab;
        return isMatched && <Box key={tab.value}>{tab.component}</Box>;
      })}
    </Stack>
  );
}

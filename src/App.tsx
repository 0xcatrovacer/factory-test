import { useContext, useEffect } from 'react';
import './App.css';
import FactoryTable from './components/FactoryTable';
import { Theme, ThemeContext } from './lib/themes/mainTheme';
import ThemeButton from './components/ThemeButton';
import FactoryComponentR1 from './components/FactoryComponentR1';

const tableSchema = {
  columns: [
    { id: "agent", label: "Agent", isNumeric: false, visible: true },
    { id: "lastCall", label: "Last call", isNumeric: false, visible: true },
    { id: "callsAudited", label: "Calls audited", isNumeric: true, visible: true },
    { id: "averageScore", label: "Average score", isNumeric: true, visible: true },
    { id: "fatalCalls", label: "Fatal calls", isNumeric: true, visible: false },
    { id: "misSelling", label: "Mis-selling", isNumeric: true, visible: false },
    { id: "businessUnit", label: "Business unit", isNumeric: false, visible: false },
    { id: "manager", label: "Manager", isNumeric: false, visible: false },
  ],
  data: [
    {
      agent: "Somil Verma",
      lastCall: "26 Jan 2024",
      callsAudited: 106,
      averageScore: 73,
      fatalCalls: 14,
      misSelling: 13,
      businessUnit: "Business unit 1",
      manager: "Swati Biswas",
    },
    {
      agent: "Pooja Ghosh",
      lastCall: "19 Jan 2024",
      callsAudited: 92,
      averageScore: 71,
      fatalCalls: 11,
      misSelling: 18,
      businessUnit: "Business unit 2",
      manager: "Hansika Sharr",
    }
  ],
};

const r1Schema = {
  config: {
    c1: true,
    c2: true,
  },
  c1Schema: [
    {
      id: "wow",
      title: "Wow calls",
      content: 10,
      bgDefault: "#00000030",
      bgOverRide: "#6B53FF80",
      textDefault: "#000000",
      textOverRide: "#3B20E2",
    },
    {
      id: "good",
      title: "Good calls",
      content: 20,
      bgDefault: "#00000030",
      textDefault: "#000000",
    }
  ],
  c2Schema: [
    {
      id: "average",
      title: "Average calls",
      content: 50,
      bgDefault: "#00000030",
      textDefault: "#000000",
      bgOverRide: "#FFC70080",
      textOverRide: "#B29119"
    },
    {
      id: "bad",
      bgDefault: "#00000030",
      textDefault: "#000000",
      title: "Bad calls",
      content: 20,
    }
  ]
}

function App() {
  const {setThemeObject} = useContext(ThemeContext)

  const theme1: Theme = {
    primary: "#0088ff",
    primaryContent: "#000000",
    secondary: "#ff5e00",
    secondaryContent: "#000000",
    hover: "#074987",
    hoverContent: "#ffffff",
    loading: "#a9d1f5",
    loadingContent: "#000000",
  }

  const theme2: Theme = {
    primary: "#ff0000",
    primaryContent: "#ffffff",
    secondary: "#9e7aff",
    secondaryContent: "#000000",
    hover: "#ff8585",
    hoverContent: "#000000",
    loading: "#ffbfbf",
    loadingContent: "#000000",
  }

  useEffect(() => {
    const setTheme = () => {
      setThemeObject(theme1)
    }
    setTheme()
  }, [])

  return (
    <div>
      <FactoryTable schema={tableSchema} />
      <ThemeButton />
      <FactoryComponentR1 schema={r1Schema} />
    </div>
  )
}

export default App
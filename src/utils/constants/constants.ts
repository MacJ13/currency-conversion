const RADIO_INPUT = "radio";

const RADIO_BUTTON_CURRENCY_GROUP = "currency_origin";

const RADIO_BUTTON_NBP_TABLE = "nbp_table";

export const RADIO_BUTTONS_DATA = [
  {
    type: RADIO_INPUT,
    name: RADIO_BUTTON_CURRENCY_GROUP,
    id: "nbp",
    value: "nbp",
    label: "z tabeli nbp",
  },
  {
    type: RADIO_INPUT,
    name: RADIO_BUTTON_CURRENCY_GROUP,
    id: "invoice",
    value: "invoice",
    label: "z rachunku/faktury/dokumentu",
  },
];

export const RADIO_BUTTONS_TABLE = [
  {
    type: RADIO_INPUT,
    name: RADIO_BUTTON_NBP_TABLE,
    id: "a",
    value: "a",
    label: "a",
  },
  {
    type: RADIO_INPUT,
    name: RADIO_BUTTON_NBP_TABLE,
    id: "b",
    value: "b",
    label: "b",
  },
];

import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

import AddClient from "./views/AddClient";
import FaultSearching from "./views/FaultSearching";
import EstimateSent from "./views/EstimateSent";
import EstimateRefused from "./views/EstimateRefused";
// import EstimateApreved from "./views/EstimateApreved";
import RepaireInProgress from "./views/RepaireInProgress";
import RepaireDone from "./views/RepaireDone";
import DeliveredToCustomer from "./views/DeliveredToCustomer";
import BuncedByCustomer from "./views/BuncedByCustomer";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/addclient" />
  },
  {
    path: "/addclient",
    layout: DefaultLayout,
    component: AddClient
  },
  {
    path: "/faultSearch",
    layout: DefaultLayout,
    component: FaultSearching
  },
  {
    path: "/estimatesent",
    layout: DefaultLayout,
    component: EstimateSent
  },
  {
    path: "/estimaterefused",
    layout: DefaultLayout,
    component: EstimateRefused
  },
  {
    path: "/repaireinprogress",
    layout: DefaultLayout,
    component: RepaireInProgress
  },
  {
    path: "/repairedone",
    layout: DefaultLayout,
    component:RepaireDone
  },
  {
    path: "/deliveredcustomer",
    layout: DefaultLayout,
    component: DeliveredToCustomer
  },
  {
    path: "/buncedbycustomer",
    layout: DefaultLayout,
    component: BuncedByCustomer
  }
];

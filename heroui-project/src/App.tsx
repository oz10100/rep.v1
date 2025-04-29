import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppLayout } from "./components/app-layout";
import { Dashboard } from "./pages/dashboard";
import { JobList } from "./pages/job-list";
import { JobForm } from "./pages/job-form";
import { CustomerList } from "./pages/customer-list";
import { JobDetails } from "./pages/job-details";
import { Settings } from "./pages/settings";
import { Reports } from "./pages/reports";
import "./index.css";

export default function App() {
  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/jobs" component={JobList} />
          <Route path="/jobs/new" component={JobForm} />
          <Route path="/jobs/:id" component={JobDetails} />
          <Route path="/customers" component={CustomerList} />
          <Route path="/reports" component={Reports} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </AppLayout>
    </Router>
  );
}
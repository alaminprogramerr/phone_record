export default function() {
  return [
    {
      title: "Add New Customer",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/addclient",
    },
    {
      title: "Fault Sarching ",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/faultSearch",
    },
    {
      title: "Estimate Sent ",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/estimatesent",
    },
    {
      title: "Estimate Refused ",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/estimaterefused",
    },
    {
      title: "Repair in Progress ",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/repaireinprogress",
    },
    {
      title: "Repaire Done",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/repairedone",
    },
    {
      title: "Deliverd to Customer ",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/deliveredcustomer",
    },
    {
      title: "Bounced by customer ",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/buncedbycustomer",
    },

    // {
    //   title: "Bounced by customer",
    //   to: "/blog-overview",
    //   htmlBefore: '<i class="material-icons">edit</i>',
    //   htmlAfter: ""
    // },
    // {
    //   title: "Blog Posts",
    //   htmlBefore: '<i class="material-icons">vertical_split</i>',
    //   to: "/blog-posts",
    // },
    // {
    //   title: "Forms & Components",
    //   htmlBefore: '<i class="material-icons">view_module</i>',
    //   to: "/components-overview",
    // },
    // {
    //   title: "User Profile",
    //   htmlBefore: '<i class="material-icons">person</i>',
    //   to: "/user-profile-lite",
    // },
    // {
    //   title: "Errors",
    //   htmlBefore: '<i class="material-icons">error</i>',
    //   to: "/errors",
    // }
  ];
}

using Microsoft.Reporting.WebForms;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace mvcReduxLab.Report
{
    public partial class Report1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if(!Page.IsPostBack)
            {
                // Set the processing mode for the ReportViewer to Local  
                ReportViewer1.ProcessingMode = ProcessingMode.Local;
                ReportViewer1.LocalReport.ReportPath = Server.MapPath("~/Report/rdlc/Report1.rdlc");
                //report.ReportPath = @"Report\rdlc\Report1.rdlc";
                LocalReport report = ReportViewer1.LocalReport;

                // 準備資料來源
                ReportDataSet ds = new ReportDataSet();
                ds.Account.AddAccountRow("id01", "id01", "id01", "2012/12/12", "12:34", "測試");
                ds.Account.AddAccountRow("id02", "id02", "id02", "2012/12/12", "12:34", "測試");

                // 更新UI
                report.DataSources.Clear();
                report.DataSources.Add(new ReportDataSource("Account", (DataTable)ds.Account));
            }
        }
    }
}
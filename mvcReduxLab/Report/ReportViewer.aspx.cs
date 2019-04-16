using Microsoft.Reporting.WebForms;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace mvcReduxLab.Report
{
    public partial class ReportViewer : System.Web.UI.Page
    {
        /// <summary>
        ///  透過 Session 交換報表資訊過來並產生報表。
        /// </summary>
        /// <remarks>
        /// 報表內資料來源的定義，全部統一在 ReportDataSet 處理。
        /// 報表開發步驟：
        /// 1) 在 ReportDataSet 定義該報表資料來源。
        /// 2) 在目錄[/Report/rdle]加入報表並開發好。
        /// 3) 應用 ReportViewer 預覽與列印。
        /// 注意：這三段的交集都在 ReportDataSet 定義的資料來源。
        /// </remarks>
        private void GenerateReport()
        {
            var ReportWrapperSessionKey = "ReportWrapper";
            var rw = (ReportWrapper)Session[ReportWrapperSessionKey];
            if (rw != null)
            {
                // Rdlc location
                ReportViewer1.LocalReport.ReportPath = rw.ReportPath;

                // Set report data source
                ReportViewer1.LocalReport.DataSources.Clear();
                foreach (var reportDataSource in rw.ReportDataSources)
                    ReportViewer1.LocalReport.DataSources.Add(reportDataSource);

                // Set report parameters
                ReportViewer1.LocalReport.SetParameters(rw.ReportParameters);

                // Refresh report
                ReportViewer1.LocalReport.Refresh();

                // Download report directly as Excel file.
                if (rw.IsDownloadDirectly)
                {
                    Warning[] warnings;
                    string[] streamids;
                    string mimeType;
                    string encoding;
                    string extension;

                    byte[] bytes = ReportViewer1.LocalReport.Render(
                       "Excel", null, out mimeType, out encoding, out extension,
                       out streamids, out warnings);

                    Response.Clear();
                    Response.AddHeader("Content-Disposition", "attachment; filename=sample.xls");
                    Response.AddHeader("Content-Length", bytes.Length.ToString());
                    Response.ContentType = "application/octet-stream";
                    Response.OutputStream.Write(bytes, 0, bytes.Length);
                }

                // Remove session
                Session[ReportWrapperSessionKey] = null;
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                GenerateReport();
            }
        }

    }
}
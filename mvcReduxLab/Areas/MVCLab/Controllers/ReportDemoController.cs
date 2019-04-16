using Microsoft.Reporting.WebForms;
using mvcReduxLab.Report;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace mvcReduxLab.Areas.MVCLab.Controllers
{
    public class ReportDemoController : Controller
    {
        // GET: MVCLab/ReportDemo
        public ActionResult Index()
        {
            return View();
        }

        // GET: MVCLab/ReportDemo/StateArea
        public async Task<ActionResult> StateArea()
        {
            using (MyDatabaseEntities ctx = new MyDatabaseEntities())
            {
                var qry = ctx.Account.SqlQuery("SELECT * FROM Account");
                List<Account> dataList = await qry.ToListAsync();
                return View(dataList);
            }
        }

        /// <summary>
        /// 列印
        /// </summary>
        /// <returns></returns>
        public ActionResult Print()
        {
            // Go report viewer page
            return Redirect("~/Report/Report1.aspx");
        }

        /// <summary>
        /// 列印(一般化)
        /// </summary>
        /// <returns></returns>
        public ActionResult Report()
        {
            // 準備資料來源
            ReportDataSet ds = new ReportDataSet();
            ds.Account.AddAccountRow("id01", "id01", "id01", "2012/12/12", "12:34", "測試");
            ds.Account.AddAccountRow("id02", "id02", "id02", "2012/12/12", "12:34", "測試");

            // Set report info
            ReportWrapper rw = new ReportWrapper();
            rw.ReportPath = Server.MapPath("~/Report/rdlc/Report1.rdlc");
            rw.ReportDataSources.Add(new ReportDataSource("Account", (DataTable)ds.Account));

            // Pass report info via session
            Session["ReportWrapper"] = rw;

            // Go report viewer page
            return Redirect("~/Report/ReportViewer.aspx");
        }
    }
}
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

            // 模擬 EF6 查詢傳值回來
            var qry = from c in ds.Account.AsEnumerable()
                      select new AccountInfo {
                          name = c.name,
                          email = c.email,
                          mobilePhone = c.mobilePhone,
                          birthday = c.birthday,
                          contactTime = c.contactTime,
                          remark = c.remark
                      };

            // Set report info
            ReportWrapper rw = new ReportWrapper();
            rw.ReportPath = Server.MapPath("~/Report/rdlc/Report1.rdlc");

            // 可以 IEnumerable 填入report data source
            rw.ReportDataSources.Add(new ReportDataSource("Account", qry));

            //// 或以 DataTable 填入report data source
            //rw.ReportDataSources.Add(new ReportDataSource("Account", (DataTable)ds.Account));

            // Pass report info via session
            Session["ReportWrapper"] = rw;

            // Go report viewer page
            return Redirect("~/Report/ReportViewer.aspx");
        }

        /// <summary>
        /// helper class
        /// </summary>
        private class AccountInfo {
            public string name { get; set; }
            public string email { get; set; }
            public string mobilePhone { get; set; }
            public string birthday { get; set; }
            public string contactTime { get; set; }
            public string remark { get; set; }
        }
    }
}
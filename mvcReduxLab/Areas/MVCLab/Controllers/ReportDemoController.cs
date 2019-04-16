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
        //public ActionResult Report()
        public async Task<ActionResult> Report()
        {
            //# 準備資料來源
            List<Account> dataList = null;
            using (MyDatabaseEntities ctx = new MyDatabaseEntities())
            {
                var qry = ctx.Account.SqlQuery("SELECT * FROM Account");
                dataList = await qry.ToListAsync();                
            }

            //# Set report info
            ReportWrapper rw = new ReportWrapper();
            rw.ReportPath = Server.MapPath("~/Report/rdlc/Report1.rdlc");
            rw.ReportDataSources.Add(new ReportDataSource("Account", dataList));

            //# Pass report info via session
            Session["ReportWrapper"] = rw;

            //# Go report viewer page
            return Redirect("~/Report/ReportViewer.aspx");
        }

        /// <summary>
        /// 套表列印測試
        /// </summary>
        public async Task<ActionResult> Overprint()
        {
            //# 準備資料來源
            List<Like> dataList = null;
            using (MyDatabaseEntities ctx = new MyDatabaseEntities())
            {
                var qry = ctx.Like.SqlQuery("SELECT * FROM [Like]");
                dataList = await qry.ToListAsync();
            }

            //# Set report info
            ReportWrapper rw = new ReportWrapper();
            rw.ReportPath = Server.MapPath("~/Report/rdlc/OverReport.rdlc");
            rw.Add(new ReportDataSource("Like", dataList));
            rw.Add(new ReportParameter("string1", "我是字串"));
            rw.Add(new ReportParameter("integer1", "12345678"));
            rw.Add(new ReportParameter("float1", "98765.4321"));




            //# Pass report info via session & Go report viewer page
            Session["ReportWrapper"] = rw;
            return Redirect("~/Report/ReportViewer.aspx");
        }
        
    }
}
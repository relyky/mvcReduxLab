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

        /// <summary>
        /// 列印傳票(試作)
        /// </summary>
        public ActionResult PrintSampleTicket()
        {
            //# 準備資料來源

            // 讀取圖檔
            byte[] imgBlob = System.IO.File.ReadAllBytes(Server.MapPath("~/images/logo.png"));

            // 準備 Images 資料來源
            ReportDataSet.ImagesDataTable imgTable = new ReportDataSet.ImagesDataTable();
            var nr = imgTable.NewImagesRow();
            imgTable.AddImagesRow(1, imgBlob, null, null);
            imgTable.AcceptChanges();
            
            //------------------------------
            //# Set report info
            ReportWrapper rw = new ReportWrapper();
            rw.ReportPath = Server.MapPath("~/Report/rdlc/SampleTicket.rdlc");
            rw.Add(new ReportParameter("param1", "103 / 11 / 08 15 : 30"));
            rw.Add(new ReportParameter("param2", "103110813572240001"));
            rw.Add(new ReportParameter("param3", "台幣帳戶存款"));
            rw.Add(new ReportParameter("param4", "USD 1,000"));
            rw.Add(new ReportParameter("param5", "29.594"));
            rw.Add(new ReportParameter("param6", "TWD 29,594"));
            rw.Add(new ReportParameter("param7", "0312XXXXXXX219 - TWD"));
            rw.Add(new ReportParameter("param8", "王某某"));
            rw.Add(new ReportParameter("param9", "1357224 - 7654321 - 陳某某"));
            rw.Add(new ReportParameter("param10", ""));

            //# 加入資料來源
            // 加入圖片
            rw.Add(new ReportDataSource("Images", (DataTable)imgTable));

            //# Pass report info via session & Go report viewer page
            Session["ReportWrapper"] = rw;
            return Redirect("~/Report/ReportViewer.aspx");
        }
    }
}
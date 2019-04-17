using Microsoft.Reporting.WebForms;
using mvcReduxLab.Report;
using QRCoder;
using System.Collections.Generic;
using System.Data;
using System.Drawing;
using System.IO;
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
            byte[] imgBlob = ReportDemoBiz.MakeQRCodeBlob(@"測試http://www.asiavista.com.tw/aaaaa/bbbbb?ccccc=ddddd&eeeee=fffff&ggggg=hhhhhiiiiijjjjjkkkkklllllmmmmm");

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

        /// <summary>
        /// 列印傳票(試作)
        /// </summary>
        public ActionResult PrintSampleTicket2()
        {
            //# 準備資料來源
            //rw.Add(new ReportParameter("stampUnit", "中和二分行"));
            //rw.Add(new ReportParameter("stampDate", "NOV 12 2018"));
            //rw.Add(new ReportParameter("stampStaff", "高某某"));

            string emptyStampPath = Server.MapPath("~/images/scb_stamp.png");
            byte[] imgBlob = ReportDemoBiz.MakeTimestampBlob(emptyStampPath, "中和二分行", "NOV 11 2018", "高某某");

            // 準備 Images 資料來源
            ReportDataSet.ImagesDataTable imgTable = new ReportDataSet.ImagesDataTable();
            var nr = imgTable.NewImagesRow();
            imgTable.AddImagesRow(1, imgBlob, null, null);
            imgTable.AcceptChanges();

            //------------------------------
            //# Set report info
            ReportWrapper rw = new ReportWrapper();
            rw.ReportPath = Server.MapPath("~/Report/rdlc/SampleTicket2.rdlc");
            rw.Add(new ReportParameter("param1", "103 / 11 / 08 15 : 30"));
            rw.Add(new ReportParameter("param2", "103110813572240001"));
            rw.Add(new ReportParameter("param3", "台幣帳戶存款"));
            rw.Add(new ReportParameter("param4", "USD 1,000"));
            rw.Add(new ReportParameter("param5", "29.594"));
            rw.Add(new ReportParameter("param6", "TWD 29,594"));
            rw.Add(new ReportParameter("param7", "0312XXXXXXX219 - TWD"));
            rw.Add(new ReportParameter("param8", "王某某"));
            rw.Add(new ReportParameter("param9", "1357224 - 7654321 - 陳某某"));

            //# 加入資料來源
            // 加入圖片
            rw.Add(new ReportDataSource("Images", (DataTable)imgTable));

            //# Pass report info via session & Go report viewer page
            Session["ReportWrapper"] = rw;
            return Redirect("~/Report/ReportViewer.aspx");
        }
    }

    class ReportDemoBiz 
    {
        /// <summary>
        /// 產生QRCode image blob
        /// </summary>
        public static byte[] MakeQRCodeBlob(string text)
        {
            // 產生QR Code
            QRCodeGenerator qrGenerator = new QRCodeGenerator();
            QRCodeData qrCodeData = qrGenerator.CreateQrCode(text, QRCodeGenerator.ECCLevel.Q); // 參數點之一
            QRCode qrCode = new QRCode(qrCodeData);
            Bitmap qrCodeImage = qrCode.GetGraphic(3); // 每單位"點"的大小。還有顏色等參數。 // 參數點之一

            // 轉成BLOB
            byte[] imgBlob = null;
            using (var ms = new MemoryStream())
            {
                qrCodeImage.Save(ms, System.Drawing.Imaging.ImageFormat.Bmp); // 參數點之一
                imgBlob = ms.ToArray();
            }

            return imgBlob;
        }

        /// <summary>
        /// 產生時間戳章/印章 timestamp image blob
        /// </summary>
        public static byte[] MakeTimestampBlob(string emptyStampPath, string stampUnit, string stampDate, string stampStaff)
        {
            //# 載入空白的時戳圖檔
            Image stampImage = Image.FromFile(emptyStampPath);

            //# 再打印：單位、日期、人員等資訊 
            // draw string
            Graphics g = Graphics.FromImage(stampImage);

            // Create font and brush.
            Font drawFont = new Font("Arial", 8, FontStyle.Bold);
            SolidBrush drawBrush = new SolidBrush(Color.DarkBlue);

            //// Set format of string.
            //StringFormat drawFormat = new StringFormat();
            //drawFormat.FormatFlags = StringFormatFlags.DirectionVertical;

            // Draw string to screen.
            g.DrawString(stampUnit, drawFont, drawBrush, 47.0F, 45.0F);
            g.DrawString(stampDate, drawFont, drawBrush, 38.0F, 70.0F);
            g.DrawString(stampStaff, drawFont, drawBrush, 55.0F, 122.0F);

            // 轉成BLOB
            byte[] imgBlob = null;
            using (var ms = new MemoryStream())
            {
                stampImage.Save(ms, System.Drawing.Imaging.ImageFormat.Bmp); // 參數點之一
                imgBlob = ms.ToArray();
            }

            return imgBlob;
        }
    }
}
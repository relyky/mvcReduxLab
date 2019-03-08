using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using System.Web.Security;
using System.Web.SessionState;

namespace mvcReduxLab
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }

        void Application_Error(object sender, EventArgs e)
        {
            Exception err = Server.GetLastError();

            ////## Log the exception and notify system operators
            //ExceptionUtility.LogException(err, "DefaultPage");
            //ExceptionUtility.NotifySystemOps(err);

            //## Response OOPS message, or redirect to OOPS page.
            //Response.Clear();
            Response.ContentType = "text/html";
            Response.Charset = "utf-8";
            Response.Write("<h2>系統嚴重錯誤！</h2>\n");
            Response.Write("<p>系統嚴重錯誤,請聯絡系統管理員!!!</p>\n");
            Response.Write("<p>" + err.Message + "</p>\n");

            //## Clear the error from the server
            // 若不清除將會導入系統錯誤畫面。
            Server.ClearError();
        }
    }
}

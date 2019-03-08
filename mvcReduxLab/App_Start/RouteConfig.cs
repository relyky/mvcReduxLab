using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace mvcReduxLab
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            //// 預計放SSRS報表
            //// ref→https://msdn.microsoft.com/en-us/library/dd329551.aspx
            //routes.MapPageRoute("WebFormRoute",
            //    "Reports/MyReport",
            //    "~/WebForms/MyReport.aspx");

            // MVC default routing
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}

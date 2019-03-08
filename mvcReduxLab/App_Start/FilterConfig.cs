using System.Web;
using System.Web.Mvc;

namespace mvcReduxLab
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            //filters.Add(new HandleErrorAttribute());
            var err = new HandleErrorAttribute();
            filters.Add(new HandleErrorAttribute() { View = "~/Views/Shared/Error.cshtml" });
        }
    }
}

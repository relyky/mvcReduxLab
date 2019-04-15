using System.Web.Mvc;

namespace mvcReduxLab.Areas.MVCLab
{
    public class MVCLabAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "MVCLab";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "MVCLab_default",
                "MVCLab/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
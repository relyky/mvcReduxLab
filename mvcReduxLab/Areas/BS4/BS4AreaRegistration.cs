using System.Web.Mvc;

namespace mvcReduxLab.Areas.BS4
{
    public class BS4AreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "BS4";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "BS4_default",
                "BS4/{controller}/{action}/{id}",
                new { action = "Default", id = UrlParameter.Optional }
            );
        }
    }
}
using Microsoft.Reporting.WebForms;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// 通用型報表預覽與列印
/// </summary>
/// <see cref="https://dotblogs.com.tw/wasichris/2015/07/12/151826"/>
namespace mvcReduxLab.Report
{
    /// <summary>
    /// 
    /// </summary>
    public class ReportWrapper
    {
        // Constructors
        public ReportWrapper()
        {
            ReportDataSources = new List<ReportDataSource>();
            ReportParameters = new List<ReportParameter>();
        }


        // Properties
        public string ReportPath { get; set; }

        public List<ReportDataSource> ReportDataSources { get; set; }

        public List<ReportParameter> ReportParameters { get; set; }

        public bool IsDownloadDirectly { get; set; }
    }
}
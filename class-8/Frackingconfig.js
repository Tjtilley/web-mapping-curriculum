    var config = {
    style: 'mapbox://styles/tjtilley/ck6bl4z6q0obp1iqxxluvpaxt',
    accessToken: 'pk.eyJ1IjoidGp0aWxsZXkiLCJhIjoiY2s1NXB6MHppMDMzMTNmcXE3Mmt5ZmFidyJ9.lgLXagCrs2fTCxSoK04htQ',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Fracking in California',
    subtitle: '',
    byline: 'By Tracy Tilley and Wendy Kwong',
    footer: 'Source: <a href="https://tjtilley.github.io/web-mapping-curriculum/class-8/Final%20Report.pdf"> Final Report </a>',
    chapters: [ 
    {
            id: 'intro',
            title: '',
            description: 'Fracking, also known as hydraulic fracturing, is used to produce oil and gas. It is done by shooting a mix of toxic chemicals, water and sand into the surface of the Earth loosening rock formations in order to extract the oil and gas. It has been known to pollute local water posing a risk to human health. According to the Center for Biological Diversity fracking can contaminate groundwater through the various toxic chemicals mixed into the water blasted into the Earth. 25% of these chemicals have the potential to cause cancer. Methane associated with the drilling can also contaminate the groundwater.',
            location: {
                center: [-123.124, 37.557],
                zoom: 5.26

            },
            onChapterEnter: [

            ],
            onChapterExit: [
               
            ]
        },
        {
            id: 'counties-id',
            title: 'Counties with Fracking in California',
            description: 'Within California there are ten counties that have documented fracking. These counties include Colusa, Glenn, Kern, Los Angeles, Monterey, Sacramento, Santa Barbara, Sutter, Kings and Ventura counties. The total population of these ten counties reaches 14,574,192 all at risk of negative health impacts related to fracking activity in these counties.',
            location: {
                center: [-123.124, 37.557],
                zoom: 5.26

            },
            onChapterEnter: [
                {
                layer: 'counties-label',
                opacity: 1
                 },
                 {
                layer: 'counties-fill',
                opacity: .5
                 },
                 {
                layer: 'counties-outline',
                opacity: 1
                 }
            ],
            onChapterExit: [
                {
                    layer: 'counties-label',
                    opacity: 0
                     },
                     {
                    layer: 'counties-fill',
                    opacity: 0
                     },
                     {
                    layer: 'counties-outline',
                    opacity: 0
                     }  
            ]
        },
        {
            id: 'gwb',
            title: 'Groundwater Basins Effected by Fracking',
            description: 'State of California, Department of Water Resources published a list of very low to high priority groundwater basins in their Sustainable Groundwater Management Act (SGMA) 2019 Basin Prioritization report. The groundwater basins that were designated high priority, which also has active fracking wells, are San Joaquin Valley in Kern County and Kings County; Cuyama Valley in Santa Barbara County; Ojai Valley, Santa Clara River Valley, Los Posas Valley, and Pleasant Valley in Ventura County and; Sacramento Valley in Colusa County and Glenn County.',
            location: {
                center: [-123.124, 37.557],
                zoom: 5.26
            },
            onChapterEnter: [
            {
                layer: 'gw-basins',
                opacity: .5
                 },
                 {
                layer: 'gwb-outlines',
                opacity: 1
                 },
                 {
                    layer: 'counties-label',
                    opacity: 1
                     },
                     {
                    layer: 'counties-fill',
                    opacity: .5
                     },
                     {
                    layer: 'counties-outline',
                    opacity: 1
                     }
            ],
            onChapterExit: [
            {
                layer: 'gw-basins',
                opacity: 0
                 },
                 {
                layer: 'gwb-outlines',
                opacity: 0
                 },
                 {
                    layer: 'counties-label',
                    opacity: 0
                     },
                     {
                    layer: 'counties-fill',
                    opacity: 0
                     },
                     {
                    layer: 'counties-outline',
                    opacity: 0
                     }
            ]
        },
        {
            id: 'wells',
            title: 'Active Fracking Wells',
            description: 'Active fracking wells can emit dust and pollution into the air and use toxic chemicals that can seep into the groundwater aquifer supply. Some of the environmental effects of fracking include: Emissions of PM 2.5, PM 10, NOx, SOx, CO, CO2 and reactive organic gases, some of which are greenhouse gases, chemical contamination from fracking fluids could affect water quality. Chemicals that are added to water to create fracking fluids are hydrochloric acid, aromatic hydrocarbons, or methanol and destruction of habitats for threatened and endangered species.',
            location: {
                center: [-123.124, 37.557],
                zoom: 5.26
            },
            onChapterEnter: [
                {
                    layer: 'gw-basins',
                    opacity: .5
                     },
                     {
                    layer: 'gwb-outlines',
                    opacity: 1
                     },
                     {
                        layer: 'counties-label',
                        opacity: 1
                         },
                         {
                        layer: 'counties-fill',
                        opacity: .5
                         },
                         {
                        layer: 'counties-outline',
                        opacity: 1
                         },
                         {
                layer: 'active-wells',
                opacity: 1
                 }
            ],
            onChapterExit: [
                {
                    layer: 'gw-basins',
                    opacity: 0
                     },
                     {
                    layer: 'gwb-outlines',
                    opacity: 0
                     },
                     {
                        layer: 'counties-label',
                        opacity: 0
                         },
                         {
                        layer: 'counties-fill',
                        opacity: 0
                         },
                         {
                        layer: 'counties-outline',
                        opacity: 0
                         },
                         {
                            layer: 'gw-basins',
                            opacity: 0
                             },
                             {
                            layer: 'gwb-outlines',
                            opacity: 0
                             },
                             {
                                layer: 'active-wells',
                                opacity: 0
                                 }
            ]
        },
        {
            id: 'Kern',
            title: 'Fracking In Kern County',
            description: 'According to the NRDC 75% of oil and gas produced in California comes from Kern County. World Population Review states the population in Kern County is 896,764 as of 2020. 122,000 of these residents, or 15% of the county’s population, live within a one-mile radius to fracking wells. This population faces health risks from fracking occurring in the county. Many of these fracking wells are placed in areas already suffering from water, air and soil pollution due to industrial activities. These places are disproportionately home to communities of color. Hispanic/ Latino residents make up 64% of the Kern County residents that live within a one-mile radius to the closest fracking wells. These populations near wells are at higher risk for respiratory and neurological problems along with cancer and birth defects due to air and water pollution.',
            location: {
              center: [-120.131, 35.395],
                zoom: 7.05
            },
            onChapterEnter: [
                {
                    layer: 'active-wells',
                    opacity: 1
                     },
                     {
                    layer: 'gw-basins',
                    opacity: .5
                     },
                     {
                    layer: 'kern-county',
                    opacity: .5
                     },
                     {
                    layer: 'gwb-outlines',
                    opacity: 1
                     },
                     {
                        layer: 'kern-fill',
                        opacity: .5
                         }
                    
            ],
            onChapterExit: [
                {
                    layer: 'active-wells',
                    opacity: 0
                     },
                     {
                    layer: 'gw-basins',
                    opacity: 0
                     },
                     {
                    layer: 'kern-county',
                    opacity: 0
                     },
                     {
                    layer: 'gwb-outlines',
                    opacity: 0
                     },
                     {
                        layer: 'kern-fill',
                        opacity: 0
                         }   
            ]
        },
        {
            id: 'Conclusion',
            title: 'Latest News on Fracking',
            description: '19 November 2019 - Governor Newsom announced a moratorium on new fracking wells that use high pressure steam to extract oil from geological formations. Approval of new fracking permits are subject to independent scientific review and audits. Stricter regulations will be established that will be more protective of public health and safety, for example, by outlawing oil and gas extraction near homes, schools, parks, and hospitals. </br> Read more here: <a href= "https://www.conservation.ca.gov/index/Pages/News/California-Establishes-Moratorium-on-High-Pressure-Extraction.aspx"> California Department of Conservation </a> </br> 13 December 2019 -  Trump Administration will open up 1.2 million acres of California land for fracking and oil drilling. California areas that are open for leasing include Fresno, Kern, Kings, Madera, San Luis Obispo, Santa Barbara, Tulare and Ventura counties. </br> Read more here: <a href="https://www.federalregister.gov/documents/2019/12/13/2019-26679/notice-of-availability-of-the-record-of-decision-for-the-bakersfield-field-office-hydraulic"> Federal Register </a> </br> 21 February 2020 - California Congressman Salud Carbajal introduced the California’s Land Preservation and Protection Act to place a ban on fracking and new oil and gas drilling in federally managed lands on California’s central and southern coasts. </br> Read more here: <a href="https://carbajal.house.gov/news/documentsingle.aspx?DocumentID=632"> US Congressman Salud Carbajal </a>',
            //to add link: "this is my text and <a href="http://google.com">this is a link</a>',
            location: {
                center: [-123.124, 37.557],
                zoom: 5.26
            },
            onChapterEnter: [
                {
                    layer: 'active-wells',
                    opacity: 1
                     },
                     {
                    layer: 'gw-basins',
                    opacity: .5
                     },
                     {
                    layer: 'counties-fill',
                    opacity: .5
                    },
                     {
                    layer: 'counties-outline',
                    opacity: 1
                    },
                     {
                    layer: 'gwb-outlines',
                    opacity: 1
                     }

            ],
            onChapterExit: [
                {
                    layer: 'active-wells',
                    opacity: 0
                     },
                     {
                    layer: 'gw-basins',
                    opacity: 0
                     },
                     {
                    layer: 'counties-fill',
                    opacity: 0
                    },
                     {
                    layer: 'counties-outline',
                    opacity: 0
                    },
                     {
                    layer: 'gwb-outlines',
                    opacity: 0
                     }
            ]
        }
    ]
};

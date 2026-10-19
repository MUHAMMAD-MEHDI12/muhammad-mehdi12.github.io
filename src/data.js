// All content on the site lives here. Edit this file to update the website.

export const profile = {
  name: 'Muhammad Mehdi',
  statement:
    'I study how much water the glacier-fed Upper Indus Basin holds, and whether global climate datasets get it right.',
  intro:
    'I am a BS Geography student at the University of the Punjab, Lahore, and an undergraduate research intern at the GeoScape Analytics Lab. My work combines satellite gravimetry (GRACE/GRACE-FO), remote sensing and GeoAI for Earth observation to understand water, snow and glaciers in the Hindu Kush–Karakoram–Himalaya.',
  seeking:
    'I am looking for a fully funded Master’s position starting in Fall 2027 in satellite hydrology, glacier and snow change, or GeoAI for Earth observation.',
  email: 'geomehdi12@gmail.com',
  linkedin: 'https://linkedin.com/in/muhammad-mehdi-2726872a7',
  cv: 'Muhammad_Mehdi_CV.pdf',
  photo: 'photo.png',
}

export const thesis = {
  title:
    'Testing Global Hydroclimate Products Against Satellite Gravimetry: A Water-Balance Benchmark for the Glacier-Fed Upper Indus Basin',
  role: 'BS thesis, supervised by Assist. Prof. Dr. Adeel Ahmad',
  status: 'In progress, manuscript in preparation',
  paragraphs: [
    'Rivers from the Upper Indus feed Tarbela Dam and much of Pakistan’s water supply, yet there are very few rain gauges in its high mountains. Global datasets fill this gap, but they disagree with each other. My thesis tests them against an independent measurement: the change in water storage seen by the GRACE and GRACE-FO satellites.',
    'Using the basin water balance (change in storage = precipitation − evapotranspiration − runoff), I compare precipitation from ERA5-Land, IMERG, MSWEP and CHIRPS, and evapotranspiration from GLEAM, ERA5-Land, GLDAS, TerraClimate and PML-V2, for the 172,700 km² basin above Tarbela from 2002 to 2025. The analysis accounts for datasets that share the same inputs, water held in Tarbela reservoir, and glacier areas from RGI 7.0.',
    'So far I have delineated the basin from HydroBASINS and cross-checked it with MERIT Hydro, removed the closed Pangong Tso basin, and quality-checked every monthly dataset. That check uncovered and corrected a documented error in ERA5-Land data for September 2022 to February 2024. The analysis in Python is now under way.',
  ],
}

export const manuscripts = [
  {
    title: 'Data-Driven Approaches for GRACE/GRACE-FO Downscaling: A Systematic Review (2021–2026)',
    authors: 'Sarwar, N., Waseem, H., Ahmad, A., Bukhari, S. S. B., Komal, I., Mehdi, M., Tipu, H. M. B., Shafi, S., Asim, S., Javed, M. A., & Waqar, M.',
    status: 'Submitted to a Springer Nature journal, October 2026',
  },
  {
    title: 'Climate and Glacier Dynamics Fragment the Karakoram Mass-Balance Anomaly',
    authors: 'Hussain, I., …, Mehdi, M., et al.',
    status: 'Submitted to the Journal of Hydrology',
  },
  {
    title: 'Spatially Adaptive Weighting for Composite Vulnerability Indexes in Heterogeneous Agricultural Landscapes of Punjab, Pakistan',
    authors: 'Ahmad, A., Mehdi, M., & Maqsood, U.',
    status: 'Book chapter submitted, Spatial Intelligence (Taylor & Francis)',
  },
  {
    title: 'GIS Applications for Monitoring and Pattern Identification',
    authors: 'Gilani, H., Bukhari, S. S. B., Tipu, H. M. B., Mehdi, M., & Ahmad, A.',
    status: 'Book chapter submitted, Elements of Smog Monitoring and Mitigation (Elsevier)',
  },
]

export const projects = [
  {
    name: 'GRIPS: Geospatial Research Index of Pakistan Studies',
    role: 'Co-developer, GeoScape Analytics Lab, 2026',
    text: 'A free literature-search app for Pakistan-focused GIS, remote sensing and environmental research. It searches several scholarly databases, removes duplicates, and exports results to CSV and BibTeX. Version 1.0.0 is archived on Zenodo.',
    link: 'https://grips-gsal.netlify.app/',
    linkText: 'Open GRIPS',
  },
  {
    name: 'CarbonScope-TX',
    role: 'FortyGuard Hackathon’26, Certificate of Demonstrated Excellence',
    text: 'An AI application for climate-resilience analysis built on FortyGuard’s hyperlocal temperature API.',
    link: 'https://muhammad-mehdi12.github.io/carbonscope-tx/',
    linkText: 'Open CarbonScope-TX',
  },
  {
    name: 'HumanScape',
    role: 'Demography atlas',
    text: 'An interactive global atlas of population, births and deaths from 1950 to 2100, built from UN World Population Prospects.',
    link: 'https://muhammad-mehdi12.github.io/demography-atlas/',
    linkText: 'Open HumanScape',
  },
  {
    name: 'University of the Punjab campus map',
    role: 'Interactive web map',
    text: 'The first interactive web map of the Quaid-e-Azam Campus, Lahore.',
    link: 'https://huggingface.co/spaces/GEOMEHDI12/punjab_university_map',
    linkText: 'Open the campus map',
  },
  {
    name: 'Economic Wealth Dashboard',
    role: 'In progress',
    text: 'An interactive geospatial dashboard of economic wealth indicators.',
    link: 'https://geoscapeanalyticslab.github.io/Economic_Wealth_Dasboard/',
    linkText: 'Open the dashboard',
  },
]

export const timeline = [
  {
    when: 'Apr 2026 – present',
    what: 'Undergraduate Research Intern, GeoScape Analytics Lab, Lahore',
    detail: 'Satellite data analysis with Google Earth Engine, Python and machine learning, including snow cover and glacier-fed runoff in the Indus basin; GeoAI for climate-change monitoring; web maps, dashboards and the lab website.',
    link: 'https://geoscapeanalyticslab.github.io/',
  },
  {
    when: 'Sep 2023 – Jun 2027 (expected)',
    what: 'BS Geography, University of the Punjab, Lahore',
    detail: 'CGPA 3.57 / 4.00 up to the 6th semester.',
  },
]

export const skills = [
  { group: 'Satellite hydrology data', items: 'GRACE/GRACE-FO mascons (JPL, CSR, GSFC), ERA5-Land, IMERG, MSWEP, CHIRPS, GLEAM, GLDAS, TerraClimate, PML-V2' },
  { group: 'GIS and remote sensing', items: 'Google Earth Engine, QGIS, ArcGIS Pro, HydroBASINS, MERIT Hydro, RGI 7.0' },
  { group: 'Python', items: 'geemap, leafmap, xarray, GeoPandas, Rasterio, rioxarray, GDAL, Shapely, NumPy, pandas, Matplotlib, machine learning' },
  { group: 'GeoAI', items: 'GeoAI for Earth observation, deep learning (CNNs) for satellite image classification' },
  { group: 'Also', items: 'R, JavaScript for Earth Engine, NetCDF/HDF5, interactive web maps and dashboards, LaTeX' },
]

export const certificates = [
  { when: 'Sep 2026', name: 'Introduction to GeoAI', by: 'YouthMappers Academy' },
  { when: 'Aug 2026', name: 'FortyGuard Hackathon’26: Certificate of Demonstrated Excellence', by: 'FortyGuard' },
  { when: 'Jul 2026', name: 'CNNs with TensorFlow: Basics of Machine Learning', by: 'Coursera', link: 'https://coursera.org/verify/W58T5YV7SZMN' },
  { when: 'Jun 2026', name: 'Introduction to Python', by: 'Coursera', link: 'https://coursera.org/verify/IMZQ39U4F57Y' },
  { when: 'May 2025', name: 'Make an Impact with Modern Geo Apps', by: 'Esri' },
  { when: 'Mar 2025', name: 'Chinese for Beginners', by: 'Peking University (Coursera)', link: 'https://coursera.org/verify/UEUYTC4GQAOP' },
  { when: 'Dec 2024', name: 'Getting Started with CyberGIS', by: 'University of Illinois Urbana-Champaign (Coursera)', link: 'https://coursera.org/verify/HVRTP2LJRBM8' },
]

export const events = [
  { when: 'Apr 2026', name: 'Open-Source GeoAI for Earth Observation (webinar, led by Dr. Qiusheng Wu)', by: 'ESGRS and Mohammed Bin Rashid Space Centre' },
  { when: 'Dec 2025', name: 'Public Opinion on Climate Change in Lahore: field survey of 40 respondents and technical report', by: 'Field project' },
  { when: 'Oct 2025', name: '2nd Position, World Habitat Day Competition', by: 'Institute of Geography, University of the Punjab' },
  { when: 'Oct 2025', name: 'One-Day Workshop on Differential GPS (DGPS)', by: 'Institute of Geography, University of the Punjab' },
  { when: 'Dec 2024', name: '1st National Geographical Conference: Sustainable Earth Resources and Planning', by: 'University of the Punjab' },
]

export const certificateFolder = 'https://drive.google.com/drive/folders/1rjVdltDWI8CXz_-ReIQACEXvkwXCnCfb'

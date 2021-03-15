# pa11y-ci-reports
Pa11y accessibility testing reports for Inclind. This process allows for bulk accessiblity testing and reporting.

## Requirements

- [Pa11y-ci](https://github.com/pa11y/pa11y-ci) `npm install -g pa11y-ci`
- Python

## Instructions

1. Generate pa11y-ci JSON report based on sitemap.xml.

`pa11y-ci --sitemap INSERT_SITEMAP_URL --json >> report.json`

2. Convert JSON results to CSV.

`./pa11y-json-to-csv.py`

3. Copy template [Inclind Accessilbity Audit Results Google Sheet](https://docs.google.com/spreadsheets/d/1TyQGeht9crQopxpR7kxCe3NOkEVlFdtx3Kbu-F56_FQ/edit?usp=sharing)

4. Import `report.csv` to the `Data` tab in the Google Sheet.

## Notes

1. Should there be a [default configuration](https://github.com/pa11y/pa11y-ci#default-configuration) with different viewport size?

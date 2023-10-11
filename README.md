# regioni-province-comuni-cf7-wordpress
This WordPress plugin enables dynamic selection of Italian regions, provinces, and comuni in Contact Form 7.

# Regioni Province Comuni for CF7 WordPress Plugin

![GitHub](https://img.shields.io/github/license/hmtechnology/regioni-province-comuni-cf7-wordpress)

This WordPress plugin allows you to seamlessly integrate dynamic selection of Italian regions, provinces, and comuni into your Contact Form 7 (CF7) forms. If your website caters to an Italian audience or you need to collect Italian addresses, this plugin simplifies the process by providing real-time, interconnected dropdowns for selecting regions, provinces, and comuni.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Support](#support)
- [Author](#author)

## Features

- Dynamic Italian region, province, and comuni dropdowns for CF7 forms.
- User-friendly interface for selecting Italian locations.
- Enhance the user experience when inputting Italian addresses.
- Seamlessly integrates with Contact Form 7.
- No coding or technical expertise required.

## Installation

1. Download the plugin ZIP file from the [latest release](https://github.com/hmtechnology/regioni-province-comuni-cf7-wordpress/releases/latest).
2. Go to your WordPress Admin Dashboard.
3. Navigate to "Plugins" > "Add New."
4. Click "Upload Plugin" and select the ZIP file.
5. Activate the "Regioni Province Comuni for CF7" plugin.

## Usage

1. Create or edit a Contact Form 7 form on your WordPress site.

2. Add the following fields to your CF7 form:

      ```html
      <label for="regione">Regione
          [select* regione id:regione class:seleziona-regione] </label>
      <label for="provincia">Provincia
          [select* provincia id:provincia class:seleziona-provincia] </label>
      <label for="comune">Comune
          [select* comune id:comune class:seleziona-comune] </label>
      
      [hidden regione-nome id:regione-nome]
      [hidden provincia-nome id:provincia-nome]
      [hidden comune-nome id:comune-nome]
      ```

3. Save the CF7 form, ensuring that the title begins with "RPC" followed by your desired form title. For example: "RPC Online Reservations" or "RPC Contact Form." It is essential that the title starts with "RPC" to ensure that the plugin is loaded only on pages containing the shortcode `[contact-form-7 id="your-form-id" title="RPC Your Form Title"]`.

4. In the "Mail" section of CF7, insert the following tags into the message body:

    - Regione: `[regione-nome]`
    - Provincia: `[provincia-nome]`
    - Comune: `[comune-nome]`

Your Contact Form 7 form is now configured to enable dynamic selection of Italian regions, provinces, and comuni. When users interact with the form, they can seamlessly choose their desired locations.

## License

This project is licensed under the GNU General Public License v3.0 - see the LICENSE file for details.

## Support

If you encounter any issues or have questions about using the plugin, please [open an issue](https://github.com/hmtechnology/regioni-province-comuni-cf7-wordpress/issues) in this repository.

## Author

This plugin is maintained by [hmtechnology](https://github.com/hmtechnology).


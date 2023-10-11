var datiRegioni = [];
var datiProvince = [];
var datiComuni = [];

jQuery(document).ready(function() {
    // Initialize Regioni on page load
    popolaRegioni();

    // Connect change events to the Regioni and Province fields
    jQuery("#regione").change(popolaProvince);
    jQuery("#provincia").change(popolaComuni);

    // Update hidden fields with the selected Regioni, Province and Comuni names
    jQuery("#regione, #provincia, #comune").change(function() {
        var selectedRegion = jQuery("#regione option:selected").text();
        var selectedProvince = jQuery("#provincia option:selected").text();
        var selectedComune = jQuery("#comune option:selected").text();

        jQuery("#regione-nome").val(selectedRegion);
        jQuery("#provincia-nome").val(selectedProvince);
        jQuery("#comune-nome").val(selectedComune);
    });
});

function popolaRegioni() {
    // Check if Regioni data has already been loaded
    if (datiRegioni.length === 0) {
        // Execute an AJAX request to get Regioni data from the PHP file
        jQuery.ajax({
            url: custom_location_data.dati_url, 
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                datiRegioni = data.regioni;
                jQuery.each(datiRegioni, function(key, value) {
                    jQuery("#regione").append('<option value="' + value.cod_regione + '">' + value.regione + '</option>');
                });
                // Initialize the Province field
                popolaProvince();
            }
        });
    } else {
        // Regioni data has already been loaded, populate the Regioni field with this data
        jQuery.each(datiRegioni, function(key, value) {
            jQuery("#regione").append('<option value="' + value.cod_regione + '">' + value.regione + '</option>');
        });
        // Initialize the Province field
        popolaProvince();
    }
}

function popolaProvince() {
    var regioneSelezionata = jQuery("#regione").val();

    // Check if Province data has already been loaded
    if (datiProvince.length === 0) {
        // Execute an AJAX request to get Province for the selected Regione
        jQuery.ajax({
            url: custom_location_data.dati_url, 
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                datiProvince = data.province;
                // Filter Province based on the selected Regione
                var province = datiProvince.filter(function(prov) {
                    return prov.cod_regione === regioneSelezionata;
                });

                jQuery("#provincia").empty();

                jQuery.each(province, function(key, value) {
                    jQuery("#provincia").append('<option value="' + value.cod_provincia + '">' + value.provincia + '</option>');
                });
                // Initialize the Comuni field
                popolaComuni();
            }
        });
    } else {
        // Province data has already been loaded, filter and populate the Province field
        var province = datiProvince.filter(function(prov) {
            return prov.cod_regione === regioneSelezionata;
        });

        jQuery("#provincia").empty();

        jQuery.each(province, function(key, value) {
            jQuery("#provincia").append('<option value="' + value.cod_provincia + '">' + value.provincia + '</option>');
        });
        // Initialize the Comuni field
        popolaComuni();
    }
}

function popolaComuni() {
    var provinciaSelezionata = jQuery("#provincia").val();

    // Check if Comuni data has already been loaded
    if (datiComuni.length === 0) {
        // Execute an AJAX request to get Comuni for the selected Province
        jQuery.ajax({
            url: custom_location_data.dati_url, 
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                datiComuni = data.comuni;
                // Filter Comuni based on the selected Province
                var comuni = datiComuni.filter(function(comune) {
                    return comune.cod_provincia === provinciaSelezionata;
                });

                jQuery("#comune").empty();

                jQuery.each(comuni, function(key, value) {
                    jQuery("#comune").append('<option value="' + value.cod_comune + '">' + value.comune + '</option>');
                });
            }
        });
    } else {
        // Comuni data has already been loaded, filter and populate the Comuni field
        var comuni = datiComuni.filter(function(comune) {
            return comune.cod_provincia === provinciaSelezionata;
        });

        jQuery("#comune").empty();

        jQuery.each(comuni, function(key, value) {
            jQuery("#comune").append('<option value="' + value.cod_comune + '">' + value.comune + '</option>');
        });
    }
}

$(document).ready(function () {
    $('#upload-form').on('submit', function (event) {
        event.preventDefault();
        let formData = new FormData(this);
        $.ajax({
            url: '/upload-image',
            method: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (data) {
                // display uploaded image
                $('#image-preview').html('<img src="' + data + '" alt="Uploaded Image">');
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Error uploading image:', errorThrown);
            }
        });
    });
    $('#image-upload').on('change', function () {
        // display preview of selected image
        document.getElementById('default_pp').style.display = "none";
        let reader = new FileReader();
        reader.onload = function (event) {
            $('#image-preview').html('<img src="' + event.target.result + '" alt="Selected Image">');
        };
        reader.readAsDataURL(this.files[0]);
    });
});
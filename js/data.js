const redmiPrices = [
    {
        model: "Redmi A2+ (2 + 32)",
        price: "23,0000",
        imageUrl: 'assets/redmi/A2+redmi.jpg'
    },
    {
        model: "Redmi A3 (3 + 64)",
        price: "25,0000",
        imageUrl: "assets/redmi/redmiA3.png"
    },
    {
        model: "Redmi A3 (4 + 128)",
        price: "28,0000",
        imageUrl: "assets/redmi/redmiA3.png"
    },
    {
        model: "Redmi 12C (3 + 64)",
        price: "27,0000",
        imageUrl: "assets/redmi/redmi12c.jpeg"
    },
    {
        model: "Redmi 13C (4 + 128)",
        price: "302,0000",
        imageUrl: "assets/redmi/redmi13c.jpg"
    },
    {
        model: "Redmi 13C (8 + 256)",
        price: "37,0000",
        imageUrl: "assets/redmi/redmi13c.jpg"
    },
    {
        model: "Redmi 12 (4 + 128)",
        price: '40,0000',
        imageUrl: "assets/redmi/redmi-12.jpg"
    },
    {
        model: "Redmi 12 (8 + 128)",
        price: "42,8000",
        imageUrl: "assets/redmi/redmi-12.jpg"
    },
    {
        model: "Redmi 12 (8 + 256)",
        price: "46,8000",
        imageUrl: "assets/redmi/redmi-12.jpg"
    },
    {
        model: "Redmi Note 12 (8 + 128)",
        price: '46,8000',
        imageUrl: "assets/redmi/redmi-note-12.jpeg"
    },
    {
        model: "Redmi Note 12 (8 + 256)",
        price: '48,8000',
        imageUrl: "assets/redmi/redmi-note-12.jpeg"
    },
    {
        model: "Redmi 13 (8 + 128)",
        price: '44,0000',
        imageUrl: "assets/redmi/redmi13.jpg"
    },
    {
        model: "Redmi Note 13 (8 + 128)",
        price: '480000',
        imageUrl: "assets/redmi/redmi-note-13.jpg"
    },
    {
        model: "Redmi Note 13 (8 + 256)",
        price: '550000',
        imageUrl: "assets/redmi/redmi-note-13.jpg"
    },
    {
        model: "Redmi Note 13 Pro 4G (8 + 256)",
        price: '72,0000',
        imageUrl: "assets/redmi/redmi13-pro.jpeg"
    },
    {
        model: "Redmi Note 13 Pro 5G (8 + 256)",
        price: '88,0000',
        imageUrl: "assets/redmi/redmi13-pro.jpeg"
    },
    {
        model: "Redmi Note 12 Pro+ 5G (8 + 256)",
        price: '95,0000',
        imageUrl: "assets/redmi/redmi12-pro-plus.jpg"
    },
    {
        model: "Redmi Note 13 Pro+ 5G (8 + 256)",
        price: '1,030,000',
        imageUrl: "assets/redmi/pro13plusPro.jpeg"
    },
    {
        model: "Redmi Note 13 Pro+ 5G (8 + 256)",
        price: '1,180,000',
        imageUrl: "assets/redmi/pro13plusPro.jpeg"
    },
    {
        model: "Xiaomi 13T (12 + 256)",
        price: '1,200,000',
        imageUrl: "assets/redmi/redmi13T.jpeg"
    }
];

function generatePhoneHTML(phone) {
    return `
      <div class="col-sm-4">
        <div class="panel panel-primary">
          <div class="panel-heading">${phone.model}</div>
          <div class="panel-body">
            <img src="${phone.imageUrl}" class="img-responsive" style="width:100%" alt="${phone.model}">
          </div>
          <div class="panel-footer">Price: ${phone.price} TZS</div>
        </div>
      </div>`;
}



$(document).ready(function() {
    function displayPhones() {
        let rowHTML = '';

        redmiPrices.forEach((phoneObject, index) => {
            rowHTML += generatePhoneHTML(phoneObject);
            if ((index + 1) % 3 === 0) {
                $('.data').append(`<div class="row">${rowHTML}</div>`);
                rowHTML = '';
            }
        });

        // If there are any remaining items, create the last row
        if (rowHTML !== '') {
            $('.data').append(`<div class="row">${rowHTML}</div>`);
        }

        // Handle item clicks
        $('.panel').on('click', function() {
            const itemName = $(this).find('.panel-heading').text();
            const itemImage = $(this).find('img').attr('src');
            const itemPrice = $(this).find('.panel-footer').text();

            $('#modalItemName').text(itemName);
            $('#modalItemImage').attr('src', itemImage);
            $('#modalItemPrice').text(itemPrice);

            // WhatsApp order button with dynamic message
            const orderMessage = `Hello, I would like to order the ${itemName} at ${itemPrice}.`;
            const whatsappUrl = `https://api.whatsapp.com/send?phone=255745726686&text=${encodeURIComponent(orderMessage)}`;
            $('#whatsappOrderBtn').attr('href', whatsappUrl);

            $('#itemModal').modal('show');
        });
    }

    
    // $('#itemModal').on('show.bs.modal', function () {
    //     $(this).find('.modal-dialog').css({
    //         'margin-top': function () {
    //             return ($(window).height() - $(this).height()) / 2;
    //         }
    //     });
    // });

    displayPhones();
});


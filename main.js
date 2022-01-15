if($(".mainSwiper").length){
    const mainSwiper = new Swiper('.mainSwiper', {
        loop: true,
		autoplay: {
			delay : 3000,
			pauseOnMouseEnter : true,
			disableOnInteraction : false,
		},
        lazy: {
            loadPrevNext: true,
        },
    });    
    const mainSwiperMobile = new Swiper('.mainSwiperMobile', {
        loop: true,
        lazy: {
            loadPrevNext: true,
        },
    });    
}
if($(".campSwiper".length)){
    var swiper = new Swiper(".campSwiper", {
        slidesPerView: 3,
        spaceBetween: 16,
        loop : true,
    });   
}

if($(".selectFlag").length){
    var select2Flag = $('.selectFlag').select2({
        selectionCssClass:'selectFlag',
        dropdownCssClass: "selectFlagDown",
        closeOnSelect: true,
        width: 'auto',
        templateResult: function (res) {
            var $span = $("<span class='flagBox d-flex flex-nowrap align-items-center'><span class='flag "+ res.title +"'></span>" + res.text + "</span>");
            return $span;
        },
        templateSelection: function (res) {
            var $span = $("<span class='flagBox d-flex flex-nowrap align-items-center'><span class='flag "+ res.title +"'></span>" + res.text + "</span>");
            return $span;
        }
    });
}


(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            
            var inputs = document.getElementsByClassName('form-control')
            var validation = Array.prototype.filter.call(inputs, function (input) {

                input.addEventListener('blur', function (event) {
                    // reset
                    input.classList.remove('is-invalid')
                    input.classList.remove('is-valid')
                    $(input).parent().removeClass("was-null");
                    $(input).parent().removeClass("was-error");
                    form.classList.remove('was-validated');

                    if (input.checkValidity() === false) {
                        input.classList.add('is-invalid');
                        $(input).parent().addClass("was-null");
                    }
                    else {
                        if(input.type == 'tel' && isNaN($(input).val()) == false){
                            input.classList.add('is-valid')
                            form.classList.add('was-validated');
                        }
                        else {
                            input.classList.add('is-invalid');
                            $(input).parent().addClass("was-error");
                        }
                    }
                }, false);

                
                input.addEventListener('keypress', function (event) {
                    // reset
                    input.classList.remove('is-invalid')
                    input.classList.remove('is-valid')
                    $(input).parent().removeClass("was-null");
                    $(input).parent().removeClass("was-error");
                    form.classList.remove('was-validated');

                }, false);


            });

            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                var tel = $("#phone");
                if(tel.val().trim() == ""){
                    $(tel).parent().addClass("was-null");
                    form.classList.add('was-validated')
                }
                else if(isNaN($(tel).val()) == false){
                    console.log("asd");
                    form.classList.add('was-validated');
                }
               
            }, false)
        })
})();


$(document).on("click",function(event){
    if ( !$(event.target).closest(".userForm").length && !(event.target).closest(".select2-container")){
       
        if(select2Flag.data('select2').isOpen()){
            select2Flag.select2('close');
        }

    }
})


/* footer start */
$(".footer [data-bs-toggle]").next().on('hide.bs.collapse',function(){
    $(this).parent().removeClass("menu-open");
});
$(".footer [data-bs-toggle]").next().on('show.bs.collapse',function(){
    $(this).parent().addClass("menu-open");
});
/* footer end */
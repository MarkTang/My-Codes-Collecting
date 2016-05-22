
//Test
function foo()
{
    return {
        foo:"foo"
    };
}


foo()


function bar()
{
    return
    {
      bar:"bar"
  };
}

bar()


//
// All JSON data convert to JSON array data;
serializeJSONArray: function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name] === undefined) {
            o[this.name] = this.value || '';
        }
        if (!o[this.name].push) {
            o[this.name] = [o[this.name]];
        }
        else {
            o[this.name].push(this.value || '');
        }
    });
    return o;
}


 // Convert JSON data if JSON data exist JSON array, else default;
 serializeJSON: function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
}

$.fn.serializeJSON = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

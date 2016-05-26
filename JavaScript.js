
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

//JSON Array convert JSON data.   (Simple Method)
 var formObject = {};
 $.each(form.serializeArray(), function (i, field) { 
     formObject[field.name] = field.value || ""; 
 });



//
git branch --set-upstream marktangwao origin/marktangwao
git branch --set-upstream <local_repo> origin/<remote_repo>




(/^1[3|4|5|7|8]\d{9}$/).test("17033335555")




<div class="col-md-2 text-right">
<label>肿瘤类型:</label>
</div>
<div class="col-md-10">
@{
	foreach (var type in Enum.GetValues(typeof(CancerType)))
	{
		var stringValue = ((CancerType)type).GetStringValue();
		<label class="col-md-3 pull-left">
		<input type="checkbox" name="CancerType" value="@type" />
		@stringValue
		</label>
	}
}
<br/>
</div>


Edit:
<div class="form-group">
<div class="col-md-2 text-right">
<label>肿瘤类型:</label>
</div>
<div class="col-md-10">
@{
	List<CancerRecord> cancerType = Model.CancerTypeList;
	foreach (var type in Enum.GetValues(typeof(CancerType)))
	{
		var stringValue = ((CancerType)type).GetStringValue();
		bool existed = cancerType.FirstOrDefault(r => r.CancerType == (CancerType)type) != null;
		<label class="col-md-3 pull-left">
		<input type="radio" name="cancerType" value="@type" @(Html.Raw(existed ? "checked=\"true\"" : "") ) />
		@stringValue
		</label>
	}
}
<br />
</div>
</div>



"UserName", "PhoneNumber", "BirthDay", "Gender", "Age", "IdNumber", "CancerType","DiagnoseTime", "RelapseOrProgress", "Comment"







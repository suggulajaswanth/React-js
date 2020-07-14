fetch('data.json').then(response=>{
	return response.json();
}).then(data=>{
	console.log(data.profile);
	profile(data.profile.basics)
	details(data.profile.details)
})
var child_one=document.querySelector(".child_one");
var child_two=document.querySelector(".child_two");
var profile=(basic_info)=>{
	//console.log(basic_info);
	var name=document.createElement("h2");
	name.textContent=basic_info.name;
	child_one.append(name);

	var role=document.createElement("h4");
	role.textContent=basic_info.role;
	role.classList.add("role");
	child_one.append(role);

	var hr=document.createElement("hr");
	child_one.append(hr);

	var email=document.createElement("a");
	email.href="mailto:"+basic_info.email;
	email.classList.add("link");
	email.textContent=basic_info.email;
	child_one.append(email);

	var br=document.createElement("br");
	child_one.append(br);

	var mobile=document.createElement("a");
	mobile.href="tel:"+basic_info.mobile;
	mobile.classList.add("link");
	mobile.textContent=basic_info.mobile;
	child_one.append(mobile);

	var address=document.createElement("p");
	address.textContent=basic_info.address;
	child_one.append(address);

}
var details=(deatils_info)=>{
	//console.log(deatils_info);
	var summaryHeading=document.createElement("h2");
	summaryHeading.textContent="Summary";
	var hr1=document.createElement("hr");
	child_two.append(summaryHeading)
	child_two.append(hr1);
	var list=document.createElement("ul");
	deatils_info.summary.map(i=>{
		var listitem=document.createElement("li");
		listitem.textContent=i;
		list.append(listitem);
	})
	child_two.append(list);


	var skillHeading=document.createElement("h2");
	skillHeading.textContent="skills";
	var hr1=document.createElement("hr");
	child_two.append(skillHeading);
	child_two.append(hr1);

	deatils_info.skills.map(j=>{
		var skillType=document.createElement("h3");
		skillType.textContent=j.type;
		child_two.append(skillType);
		j.values.map(j_value=>{
			var skillValue=document.createElement("span");
			skillValue.textContent=j_value;
			skillValue.classList.add("skill");
			child_two.append(skillValue);
		})
	
	})

}
(()=>{"use strict";let e=function(e,t,o,r){return{title:e,description:t,dueDate:o,dueTime:r}};console.log("Izuku Dripdoria");let t=e("Do Homework","Do my Homework tommorrow","Due on Monday","due at 8 AM"),o=e("Write Essay","Write Essay for Spanish class","Due on Tuesday","Due at 12 PM"),r=e("Start Drawing","Start Drawing for Art Class","Due on Wednesday","Due at 4 PM");console.log(t,o,r);let i=function(e){let t=[];return{title:"school",addItem:function(e){t.push(e)},removeItem:function(e){if(e.title)for(let o=0;o<t.length;o++)if(t[o].title===e.title){t.splice(o,1);break}},itemArray:t}}();i.addItem(t),console.log(i)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQ0EsSUFBSUEsRUFBVyxTQUFTQyxFQUFPQyxFQUFhQyxFQUFTQyxHQUVqRCxNQUFPLENBQUNILFFBQU9DLGNBQWFDLFVBQVNDLFVBRXpDLEVDSEFDLFFBQVFDLElBQUksbUJBRVosSUFBSUMsRUFBYVAsRUFBUyxjQUFlLDJCQUE0QixnQkFBaUIsZUFFbEZRLEVBQWFSLEVBQVMsY0FBZSxnQ0FBaUMsaUJBQWtCLGdCQUV4RlMsRUFBZ0JULEVBQVMsZ0JBQWlCLDhCQUErQixtQkFBb0IsZUFFakdLLFFBQVFDLElBQUlDLEVBQVlDLEVBQVlDLEdBRXBDLElBQUlDLEVESlUsU0FBU1QsR0FFbkIsSUFBSVUsRUFBWSxHQWdDaEIsTUFBTyxDQUFDVixNQzlCYyxTRDhCUFcsUUE5QkQsU0FBU0MsR0FFbkJGLEVBQVVHLEtBQUtELEVBRW5CLEVBMEJ3QkUsV0F4QlAsU0FBU0YsR0FFdEIsR0FBSUEsRUFBS1osTUFLTCxJQUFLLElBQUllLEVBQUksRUFBR0EsRUFBSUwsRUFBVU0sT0FBUUQsSUFFbEMsR0FBSUwsRUFBVUssR0FBR2YsUUFBVVksRUFBS1osTUFBTyxDQUVuQ1UsRUFBVU8sT0FBT0YsRUFBRSxHQUNuQixLQUVKLENBUVosRUFFb0NMLFlBRXhDLENDaENrQlEsR0FFbEJULEVBQVlFLFFBQVFMLEdBRXBCRixRQUFRQyxJQUFJSSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbGlzdGl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5sZXQgbGlzdEl0ZW0gPSBmdW5jdGlvbih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGR1ZVRpbWUpIHtcblxuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBkdWVUaW1lfVxuXG59XG5cblxubGV0IHByb2plY3QgPSBmdW5jdGlvbih0aXRsZSkge1xuXG4gICAgbGV0IGl0ZW1BcnJheSA9IFtdO1xuXG4gICAgbGV0IGFkZEl0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XG5cbiAgICAgICAgaXRlbUFycmF5LnB1c2goaXRlbSk7XG5cbiAgICB9XG5cbiAgICBsZXQgcmVtb3ZlSXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcblxuICAgICAgICBpZiAoaXRlbS50aXRsZSkge1xuXG5cbiAgICAgICAgICAgIC8vSW5pdGlhbCB2ZXJzaW9uIG9mIHRoZSBmdW5jdGlvbiB0aGF0IGRlcGVuZHMgb24gc2ltcGxlIGxpbmVhciBzZWFyY2hcblxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVtQXJyYXkubGVuZ3RoOyB4KyspIHtcblxuICAgICAgICAgICAgICAgIGlmIChpdGVtQXJyYXlbeF0udGl0bGUgPT09IGl0ZW0udGl0bGUpIHtcblxuICAgICAgICAgICAgICAgICAgICBpdGVtQXJyYXkuc3BsaWNlKHgsMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vTGF0ZXIgdmVyc2lvbiB0aGF0IFNIT1VMRCB1c2UgYmluYXJ5IHNlYXJjaCBvbmNlIHRoZSBkYXRlIGZvcm1hdCBpcyBpbnRlZ3JhdGVkXG4gICAgICAgICAgICAvL2NvcnJlY3RseVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge3RpdGxlLCBhZGRJdGVtLCByZW1vdmVJdGVtLCBpdGVtQXJyYXl9O1xuXG59XG5cblxuZXhwb3J0IHtsaXN0SXRlbSwgcHJvamVjdH07XG5cbiIsImltcG9ydCB7bGlzdEl0ZW0sIHByb2plY3R9IGZyb20gJy4vbGlzdGl0ZW0uanMnXG5cbmNvbnNvbGUubG9nKCdJenVrdSBEcmlwZG9yaWEnKTtcblxubGV0IGRvSG9tZXdvcmsgPSBsaXN0SXRlbSgnRG8gSG9tZXdvcmsnLCAnRG8gbXkgSG9tZXdvcmsgdG9tbW9ycm93JywgJ0R1ZSBvbiBNb25kYXknLCAnZHVlIGF0IDggQU0nKTtcblxubGV0IHdyaXRlRXNzYXkgPSBsaXN0SXRlbSgnV3JpdGUgRXNzYXknLCAnV3JpdGUgRXNzYXkgZm9yIFNwYW5pc2ggY2xhc3MnLCAnRHVlIG9uIFR1ZXNkYXknLCAnRHVlIGF0IDEyIFBNJyk7XG5cbmxldCBzdGFydERyYXdpbm5nID0gbGlzdEl0ZW0oJ1N0YXJ0IERyYXdpbmcnLCAnU3RhcnQgRHJhd2luZyBmb3IgQXJ0IENsYXNzJywgJ0R1ZSBvbiBXZWRuZXNkYXknLCAnRHVlIGF0IDQgUE0nKTtcblxuY29uc29sZS5sb2coZG9Ib21ld29yaywgd3JpdGVFc3NheSwgc3RhcnREcmF3aW5uZyk7XG5cbmxldCBzY2hvb2xzdHVmZiA9IHByb2plY3QoJ3NjaG9vbCcpO1xuXG5zY2hvb2xzdHVmZi5hZGRJdGVtKGRvSG9tZXdvcmspO1xuXG5jb25zb2xlLmxvZyhzY2hvb2xzdHVmZik7XG5cbmxldCBnb2t1ID0gJ3NvbiBnb2t1JztcblxuXG5cblxuIl0sIm5hbWVzIjpbImxpc3RJdGVtIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJkdWVUaW1lIiwiY29uc29sZSIsImxvZyIsImRvSG9tZXdvcmsiLCJ3cml0ZUVzc2F5Iiwic3RhcnREcmF3aW5uZyIsInNjaG9vbHN0dWZmIiwiaXRlbUFycmF5IiwiYWRkSXRlbSIsIml0ZW0iLCJwdXNoIiwicmVtb3ZlSXRlbSIsIngiLCJsZW5ndGgiLCJzcGxpY2UiLCJwcm9qZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==
{(props.user === "none") ?
<div>
   <Switch>
     <Route path="/" exatct component={ Dishes } />
     <Redirect to="/" />
     <Route />
   </Switch>
 <Testimonials />
 <Footer />
</div>

: (props.user.role) ? 
(props.user.role === "user") ?
 <div>
     <Switch>
       <Route path="/" exatct component={Dishes} />
       {/* <Route path="/orders" component={<Orders />} /> */}
       {/* <Route path="/notification" component={<notification />} /> */}
       {/* <Route path="/contact" component={<contact />} /> */}
       <Redirect to="/" />
     </Switch>
   <Sidebar />
 </div>

: (props.user.role === "admin") ?
 <div>
     <Switch>
       <Route path="/" exatct component={Dishes} />
       {/* <Route path="/add/:add" exact component={<Editor />} /> */}
       {/* <Route path="/edit/:dish/:iDish" component={<Editor />} /> */}
       {/* <Route path="/orders" component={<Orders />} /> */}
       {/* <Route path="/orders/:order/:iOrder" component={<Editor />} /> */}
       {/* <Route path="/notification" component={<notification />} /> */}
       {/* <Route path="/Letters" component={<Letters />} /> */}
       {/* <Route path="/contact" component={<contact />} /> */}
       <Redirect to="/" />
     </Switch>
   <Sidebar />
 </div>
: <div>euhhh !</div>
: <div>euhhh !</div>
}
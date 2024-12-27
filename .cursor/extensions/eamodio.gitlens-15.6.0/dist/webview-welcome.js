exports.id=635,exports.ids=[635],exports.modules={2610:(e,t,i)=>{i.d(t,{WelcomeWebviewProvider:()=>WelcomeWebviewProvider});var n=i(1398),s=i(3223),o=i(9538),a=i(30),r=i(6407),g=i(3302);let d="welcome",h=new g.Q2(d,"configuration/update"),c=new g.C1(d,"didChange",!0),l=new g.C1(d,"org/settings/didChange"),u=Object.freeze({dispose:()=>{}});let WelcomeWebviewProvider=class WelcomeWebviewProvider{constructor(e,t){this.container=e,this.host=t,this._disposable=n.Disposable.from(a.H.onDidChange(this.onConfigurationChanged,this),this.container.git.onDidChangeRepositories(()=>this.notifyDidChange(),this),n.workspace.isTrusted?u:n.workspace.onDidGrantWorkspaceTrust(()=>this.notifyDidChange(),this),this.container.subscription.onDidChange(this.onSubscriptionChanged,this),(0,r.wt)(this.onContextChanged,this))}_disposable;dispose(){this._disposable.dispose()}includeBootstrap(){return this.getState()}onReloaded(){this.notifyDidChange()}getOrgSettings(){return{ai:(0,r.SD)("gitlens:gk:organization:ai:enabled",!1),drafts:(0,r.SD)("gitlens:gk:organization:drafts:enabled",!1)}}onContextChanged(e){["gitlens:gk:organization:ai:enabled","gitlens:gk:organization:drafts:enabled"].includes(e)&&this.notifyDidChangeOrgSettings()}onSubscriptionChanged(e){this.notifyDidChange(e.current)}onConfigurationChanged(e){(a.H.changed(e,"codeLens.enabled")||a.H.changed(e,"currentLine.enabled"))&&this.notifyDidChange()}onMessageReceived(e){!0===h.is(e)&&this.updateConfiguration(e.params)}async getState(e){return{...this.host.baseWebviewState,version:this.container.version,config:{codeLens:a.H.get("codeLens.enabled",void 0,!0,!0),currentLine:a.H.get("currentLine.enabled",void 0,!0,!0)},repoFeaturesBlocked:!n.workspace.isTrusted||0===this.container.git.openRepositoryCount||this.container.git.hasUnsafeRepositories(),isTrialOrPaid:await this.getTrialOrPaidState(e),canShowPromo:await this.getCanShowPromo(e),orgSettings:this.getOrgSettings()}}async getTrialOrPaidState(e){let t=e??await this.container.subscription.getSubscription(!0);return!![s.zZ.ProTrial,s.zZ.Paid].includes(t.state)}async getCanShowPromo(e){let t=new Date("2023-12-31T07:59:00.000Z").getTime();if(Date.now()>t)return!1;let i=e??await this.container.subscription.getSubscription(!0);return!(0,o.A_)(i)}updateConfiguration(e){a.H.updateEffective(`${e.type}.enabled`,e.value)}async notifyDidChange(e){this.host.notify(c,{state:await this.getState(e)})}notifyDidChangeOrgSettings(){this.host.notify(l,{orgSettings:this.getOrgSettings()})}}}};
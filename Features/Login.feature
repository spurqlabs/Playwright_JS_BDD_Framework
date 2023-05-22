Feature: Login Feature
 
@login
Scenario: Login to OrangeHRM
 When I Visit the OrangeHRM login page
 And I enter username
 And I enter Password
 And I click on Login button
 Then I verify dashboard URL
from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Profile

class UserRegisterForm(UserCreationForm):
    # Add email form in register form
    email = forms.EmailField(label="Correo electrónico")

    # Re-write labels in spanish
    username = forms.CharField(label='Usuario')
    password1 = forms.CharField(
        label="Contraseña",
        strip=False,
        widget=forms.PasswordInput,
        help_text="La contraseña no puede contener información personal. Debe tener al menos 8 caracteres. No puede ser una palabra común. No puede tener solo números.")

    password2 = forms.CharField(
        label="Confirmar contraseña",
        strip=False,
        widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']

class UserUpdateForm(forms.ModelForm):
    # Add email form in register form
    email = forms.EmailField(label="Correo electrónico")
    username = forms.CharField(label='Usuario')

    class Meta:
        model = User
        fields = ['username', 'email']


class ProfileUpdateForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['image']
